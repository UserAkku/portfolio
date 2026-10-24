"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode, RefObject, SubmitEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleAlert,
  Copy,
  LoaderCircle,
  Plus,
  RotateCcw,
} from "lucide-react";
import FadeIn from "../FadeIn";
import { PERSON } from "@/lib/site";
import { SERVICES } from "@/lib/services";

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgvwdny";
const EMAIL = PERSON.email;
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");
/** The reply-time promise. Shown in the header, under the button and on the success screen. */
const REPLY_TIME = "within 48 hours";
const MIN_MESSAGE_LENGTH = 10;
const REQUEST_TIMEOUT_MS = 15000;

interface ProjectType {
  /** Sent to Formspree; also the chip label unless `short` is set. */
  value: string;
  /** Shorter chip label so two chips fit per row on small phones. */
  short?: string;
  /** Prompt shown under the message field once this type is picked. */
  hint: string;
  /** Service page slug that pre-selects this type when the form is shown there. */
  service?: string;
}

// Ordered so chips pair up two-per-row on a 360px phone.
const PROJECT_TYPES: readonly ProjectType[] = [
  {
    value: "Shopify store",
    service: "shopify-developer",
    hint: "Do you already have a store? Roughly how many products, and which apps or integrations do you rely on?",
  },
  {
    value: "SaaS / MVP",
    service: "saas-development",
    hint: "What problem does it solve, who are the first users, and what must version one do?",
  },
  {
    value: "Next.js website",
    short: "Next.js site",
    service: "nextjs-developer",
    hint: "Which pages do you need, do you have designs, and is there a CMS or backend involved?",
  },
  {
    value: "Custom e-commerce",
    short: "E-commerce",
    service: "ecommerce-development",
    hint: "What are you selling, how many products, and which payment and shipping options do you need?",
  },
  {
    value: "AI product",
    service: "ai-app-development",
    hint: "What should the AI actually do, what data does it work with, and does it plug into an existing product?",
  },
  {
    value: "Landing page",
    service: "landing-page-development",
    hint: "What are you launching, who is it for, and what should visitors do: sign up, buy or book a call?",
  },
  {
    value: "Something else",
    hint: "What are you trying to build, and what does done look like for you?",
  },
];

const DEFAULT_MESSAGE_HINT =
  "What are you building, who is it for, and what does a great result look like? Links to existing sites or designs help.";

const TIMELINES = ["ASAP", "Within a month", "1–3 months", "Flexible"] as const;

const PROFILES = [
  { label: "LinkedIn", handle: "Akhilesh Kumar", href: PERSON.linkedin },
  { label: "GitHub", handle: "@UserAkku", href: PERSON.github },
] as const;

const NEXT_STEPS = [
  `I read your message and reply ${REPLY_TIME}, usually with a few questions.`,
  "If it looks like a fit, we get on a short call to pin down scope and timeline.",
  "You get a written plan and quote before any work starts.",
] as const;

/* -------------------------------------------------------------------------- */
/*  Form logic                                                                */
/* -------------------------------------------------------------------------- */

type Status = "idle" | "submitting" | "success" | "error";
type RequiredField = "message" | "name" | "email";
type Values = Record<RequiredField | "budget", string>;
type FieldErrors = Partial<Record<RequiredField, string>>;
type CopyState = "idle" | "copied" | "failed";

interface SentBrief {
  firstName: string;
  email: string;
  tags: string[];
}

/** Same order as on screen, so submit focuses the first invalid field a reader would hit. */
const REQUIRED_FIELDS: readonly RequiredField[] = ["message", "name", "email"];
const EMPTY_VALUES: Values = { message: "", name: "", email: "", budget: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateField(field: RequiredField, raw: string): string | undefined {
  const value = raw.trim();
  switch (field) {
    case "message":
      if (!value) return "Tell me a little about what you need.";
      if (value.length < MIN_MESSAGE_LENGTH) {
        return `A bit more detail helps (at least ${MIN_MESSAGE_LENGTH} characters).`;
      }
      return undefined;
    case "name":
      return value ? undefined : "What should I call you?";
    case "email":
      if (!value) return "I need an email address to reply to.";
      if (!EMAIL_PATTERN.test(value)) return "That email doesn't look right. Check for typos.";
      return undefined;
  }
}

function validateAll(values: Values): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of REQUIRED_FIELDS) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

/** Formspree answers failed submissions with `{ errors: [{ field?, message }] }`. */
function readFormspreeError(body: unknown): string | null {
  if (typeof body !== "object" || body === null) return null;
  const { errors } = body as { errors?: unknown };
  if (!Array.isArray(errors)) return null;

  const parts = errors.flatMap((item: unknown) => {
    if (typeof item !== "object" || item === null) return [];
    const { field, message } = item as { field?: unknown; message?: unknown };
    if (typeof message !== "string" || !message) return [];
    return [typeof field === "string" && field ? `${field} ${message}` : message];
  });
  if (parts.length === 0) return null;

  const text = parts.join(". ");
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}.`;
}

function describedBy(...ids: Array<string | false | undefined>): string | undefined {
  const value = ids.filter(Boolean).join(" ");
  return value || undefined;
}

/** On a service page, start with that service's project type already picked. */
function typesForPath(pathname: string | null): string[] {
  const slug = pathname?.match(/^\/services\/([^/]+)/)?.[1];
  const match = PROJECT_TYPES.find((type) => type.service === slug);
  return match ? [match.value] : [];
}

/** navigator.clipboard needs a secure context and isn't on older iOS; fall back to execCommand. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      area.remove();
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  Styles                                                                    */
/* -------------------------------------------------------------------------- */

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const ROW_FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
// Labels get a UA `cursor: default`; keep the custom cursor alone on mouse devices.
const LABEL =
  "block text-xs font-bold uppercase tracking-widest text-zinc-300 pointer-fine:cursor-none";
const INLINE_LINK = `font-semibold text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white ${ROW_FOCUS_RING}`;

function fieldClass(invalid: boolean): string {
  return [
    "block w-full rounded-none border-b bg-transparent py-3 text-lg text-foreground",
    "placeholder:text-zinc-600 transition-[border-color,box-shadow] duration-200 focus:outline-hidden",
    invalid
      ? "border-red-400/80 focus:border-red-400 focus:shadow-[0_1px_0_0_#f87171]"
      : "border-white/20 hover:border-white/40 focus:border-white focus:shadow-[0_1px_0_0_#ffffff]",
  ].join(" ");
}

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                              */
/* -------------------------------------------------------------------------- */

function GroupLegend({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <legend className="mb-6 w-full">
      <span className="flex items-center gap-4">
        <span aria-hidden="true" className="font-heading text-sm font-bold tracking-widest text-zinc-600">
          {index}
        </span>
        <span className="font-heading text-base font-bold uppercase tracking-widest text-foreground md:text-lg">
          {title}
        </span>
        <span aria-hidden="true" className="h-px min-w-6 flex-1 bg-white/10" />
      </span>
      {note && <span className="mt-2 block text-sm text-zinc-400">{note}</span>}
    </legend>
  );
}

function OptionalTag() {
  return <span className="ml-2 font-medium text-zinc-400">(Optional)</span>;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm font-medium text-red-400">
      <CircleAlert aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </p>
  );
}

interface ChipProps {
  type: "checkbox" | "radio";
  name: string;
  value: string;
  label?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
}

/** A real checkbox/radio, visually replaced by a sharp-cornered chip. */
function Chip({ type, name, value, label, checked, onChange, inputRef }: ChipProps) {
  return (
    <label
      className={[
        "relative inline-flex min-h-11 select-none items-center gap-2 border px-3.5 py-2 sm:gap-2.5 sm:px-4",
        "text-xs font-semibold uppercase tracking-widest transition-colors duration-200 pointer-fine:cursor-none",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white",
        checked
          ? "border-white bg-white text-black"
          : "border-white/20 text-zinc-300 hover:border-white/60 hover:text-white",
      ].join(" ")}
    >
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {type === "checkbox" ? (
        checked ? (
          <Check aria-hidden="true" size={14} strokeWidth={2.5} className="shrink-0" />
        ) : (
          <Plus aria-hidden="true" size={14} className="shrink-0 opacity-60" />
        )
      ) : (
        <span
          aria-hidden="true"
          className={`h-2 w-2 shrink-0 rounded-full border border-current ${checked ? "bg-current" : "opacity-60"}`}
        />
      )}
      {label ?? value}
    </label>
  );
}

function AsideHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 border-b border-white/10 pb-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
      {children}
    </h3>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function Contact() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  // Service pages already end with their own "Other things I build" list
  const onServicePage = pathname?.startsWith("/services") ?? false;

  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [projectTypes, setProjectTypes] = useState<string[]>(() => typesForPath(pathname));
  const [timeline, setTimeline] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<RequiredField, boolean>>>({});
  const [submitError, setSubmitError] = useState("");
  const [sent, setSent] = useState<SentBrief | null>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const firstChipRef = useRef<HTMLInputElement>(null);
  const successPanelRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorBoxRef = useRef<HTMLDivElement>(null);
  const refocusFormRef = useRef(false);

  // Move focus with the content swap so keyboard and screen-reader users land on the new state.
  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus({ preventScroll: true });
      // The form above was taller than the panel; bring the panel back under the fixed navbar
      const panel = successPanelRef.current;
      if (panel) {
        const { top } = panel.getBoundingClientRect();
        if (top < 96 || top > window.innerHeight * 0.6) {
          panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
      }
    } else if (status === "error") {
      errorBoxRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    } else if (status === "idle" && refocusFormRef.current) {
      refocusFormRef.current = false;
      firstChipRef.current?.focus();
    }
  }, [status, reduceMotion]);

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const isSubmitting = status === "submitting";
  const latestType = PROJECT_TYPES.find(
    (type) => type.value === projectTypes[projectTypes.length - 1]
  );
  const liveMessage = isSubmitting
    ? "Sending your message…"
    : status === "error"
      ? `Your message wasn't sent. ${submitError}`
      : "";

  const focusField = (field: RequiredField) => {
    const target =
      field === "message" ? messageRef.current : field === "name" ? nameRef.current : emailRef.current;
    target?.focus();
  };

  const resetForm = () => {
    setValues(EMPTY_VALUES);
    setProjectTypes(typesForPath(pathname));
    setTimeline("");
    setErrors({});
    setTouched({});
  };

  const handleTextChange =
    (field: keyof Values) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      // Once a field has been checked, re-check as they type so the error clears the moment it's fixed.
      if (field !== "budget" && touched[field]) {
        setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
      }
    };

  const handleBlur =
    (field: RequiredField) => (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      // Tabbing past an empty field isn't a mistake yet; wait for input or submit.
      if (!value.trim() && !touched[field]) return;
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    };

  const handleMessageKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  const toggleProjectType = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setProjectTypes((prev) =>
      checked ? [...prev.filter((item) => item !== value), value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({ message: true, name: true, email: true });
    const firstInvalid = REQUIRED_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = values.name.trim();
    const email = values.email.trim();
    const budget = values.budget.trim();
    const types = data.getAll("project_type").map(String);
    const brief: SentBrief = {
      firstName: name.split(/\s+/)[0] ?? "",
      email,
      tags: [...types, timeline, budget].filter(Boolean),
    };

    // Honeypot: people never see this field. Report success so bots learn nothing.
    if (String(data.get("_gotcha") ?? "").trim()) {
      resetForm();
      setSent(brief);
      setStatus("success");
      return;
    }

    data.delete("project_type");
    data.set("project_type", types.join(", ") || "Not specified");
    data.set("timeline", timeline || "Not specified");
    data.set("budget", budget || "Not specified");
    data.set("name", name);
    data.set("email", email);
    data.set("message", values.message.trim());
    // Tells the inbox whether the lead came from the home page or a service landing page
    data.set("source_page", pathname || "/");
    data.set(
      "_subject",
      `New project inquiry from ${name}${types.length ? ` (${types.join(", ")})` : ""}`
    );

    setSubmitError("");
    setStatus("submitting");

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });

      if (response.ok) {
        resetForm();
        setSent(brief);
        setStatus("success");
        return;
      }

      let detail: string | null = null;
      try {
        detail = readFormspreeError(await response.json());
      } catch {
        // Non-JSON error body; fall back to the generic message.
      }
      setSubmitError(detail ?? "The form service returned an error.");
      setStatus("error");
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === "AbortError";
      setSubmitError(
        timedOut ? "The request took too long." : "The connection dropped before it went through."
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
    }
  };

  const startOver = () => {
    refocusFormRef.current = true;
    setSent(null);
    setSubmitError("");
    setStatus("idle");
  };

  const copyEmail = async () => {
    setCopyState((await copyText(EMAIL)) ? "copied" : "failed");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 px-6 md:px-12 w-full border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <FadeIn>
          <header className="mb-16 md:mb-20 text-center md:text-left">
            <h2
              id="contact-heading"
              className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest leading-none mb-4 text-foreground"
            >
              {"Let's Build Something"}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium tracking-wide">
              Tell me what you&apos;re building. I&apos;ll reply personally with how I&apos;d approach it.
            </p>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs font-bold uppercase tracking-widest text-zinc-400 md:justify-start">
              <span className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                </span>
                Open for freelance projects
              </span>
              <span aria-hidden="true" className="hidden text-zinc-700 sm:inline">
                /
              </span>
              <span>Replies {REPLY_TIME}</span>
            </p>
            {/* On stacked layouts the direct-email block sits below the whole form */}
            <a
              href="#contact-direct"
              className={`mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-zinc-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white lg:hidden ${ROW_FOCUS_RING}`}
            >
              Prefer email? Skip the form
              <ArrowDown aria-hidden="true" size={16} />
            </a>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-0">
          {/* LEFT: form, or the confirmation that replaces it */}
          <FadeIn
            delay={100}
            className="min-w-0 lg:col-span-7 lg:border-r lg:border-white/10 lg:pr-12 xl:pr-16"
          >
            {/* Persistent live region: announces sending / failure without moving focus */}
            <p role="status" className="sr-only">
              {liveMessage}
            </p>

            {status === "success" && sent ? (
              <motion.div
                ref={successPanelRef}
                key="sent"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex scroll-mt-28 flex-col items-start gap-8 border border-white/10 p-6 sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center bg-white text-black"
                >
                  <Check size={22} strokeWidth={2.5} />
                </span>
                <div>
                  <h3
                    ref={successHeadingRef}
                    tabIndex={-1}
                    className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground focus:outline-hidden"
                  >
                    Brief received
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                    Thanks{sent.firstName ? `, ${sent.firstName}` : ""}. I&apos;ll reply
                    {sent.email ? (
                      <>
                        {" "}to <span className="text-foreground wrap-anywhere">{sent.email}</span>
                      </>
                    ) : null}{" "}
                    {REPLY_TIME}, usually with a few questions about scope.
                  </p>
                  {sent.tags.length > 0 && (
                    <ul aria-label="Your brief" className="mt-6 flex flex-wrap gap-2">
                      {sent.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                    Forgot something? Email me at{" "}
                    <a href={`mailto:${EMAIL}`} className={`${INLINE_LINK} wrap-anywhere`}>
                      {EMAIL}
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={startOver}
                    className={`group inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 hover:bg-white hover:text-black ${FOCUS_RING}`}
                  >
                    Send another
                    <RotateCcw
                      aria-hidden="true"
                      size={16}
                      className="transition-transform duration-300 group-hover:-rotate-45 motion-reduce:transition-none"
                    />
                  </button>
                  <Link
                    href="/#projects"
                    className={`group inline-flex min-h-11 items-center justify-center gap-2 px-2 py-3 text-sm font-semibold uppercase tracking-widest text-zinc-300 transition-colors duration-300 hover:text-white ${FOCUS_RING}`}
                  >
                    See recent work
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                noValidate
                onSubmit={handleSubmit}
                aria-label="Project inquiry"
                aria-busy={isSubmitting || undefined}
                className="flex flex-col gap-14 md:gap-16 scheme-dark"
              >
                <input type="hidden" name="_subject" value="New project inquiry via akhileshkumar.in" />
                {/* Honeypot for bots; Formspree drops any submission where it's filled */}
                <div aria-hidden="true" className="sr-only">
                  <label htmlFor="contact-hp">Leave this field empty</label>
                  <input id="contact-hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                {/* 01: project type */}
                <fieldset>
                  <GroupLegend index="01" title="What do you need?" note="Pick any that apply. Optional." />
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {PROJECT_TYPES.map((type, index) => (
                      <Chip
                        key={type.value}
                        type="checkbox"
                        name="project_type"
                        value={type.value}
                        label={type.short}
                        checked={projectTypes.includes(type.value)}
                        onChange={toggleProjectType}
                        inputRef={index === 0 ? firstChipRef : undefined}
                      />
                    ))}
                  </div>
                </fieldset>

                {/* 02: the project */}
                <fieldset>
                  <GroupLegend index="02" title="Tell me about it" />
                  <div className="flex flex-col gap-10">
                    <div>
                      <label htmlFor="contact-message" className={LABEL}>
                        Message
                      </label>
                      <textarea
                        ref={messageRef}
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        maxLength={5000}
                        value={values.message}
                        onChange={handleTextChange("message")}
                        onBlur={handleBlur("message")}
                        onKeyDown={handleMessageKeyDown}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={describedBy(
                          errors.message && "contact-message-error",
                          "contact-message-hint"
                        )}
                        placeholder="Tell me about your project…"
                        className={`${fieldClass(Boolean(errors.message))} mt-2 min-h-30 max-h-96 resize-none field-sizing-content`}
                      />
                      <FieldError id="contact-message-error" message={errors.message} />
                      <p id="contact-message-hint" className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {latestType ? (
                          <>
                            <span className="font-semibold text-zinc-200">{latestType.value}:</span>{" "}
                            {latestType.hint}
                          </>
                        ) : (
                          DEFAULT_MESSAGE_HINT
                        )}
                      </p>
                    </div>

                    <fieldset>
                      <legend className={LABEL}>
                        Timeline
                        <OptionalTag />
                      </legend>
                      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                        {TIMELINES.map((option) => (
                          <Chip
                            key={option}
                            type="radio"
                            name="timeline"
                            value={option}
                            checked={timeline === option}
                            onChange={(event) => setTimeline(event.target.value)}
                          />
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="contact-budget" className={LABEL}>
                        Budget
                        <OptionalTag />
                      </label>
                      <input
                        id="contact-budget"
                        type="text"
                        name="budget"
                        maxLength={80}
                        autoComplete="off"
                        value={values.budget}
                        onChange={handleTextChange("budget")}
                        aria-describedby="contact-budget-hint"
                        placeholder="A rough range, in any currency"
                        className={`${fieldClass(false)} mt-2`}
                      />
                      <p id="contact-budget-hint" className="mt-3 text-sm leading-relaxed text-zinc-400">
                        Not sure yet? Leave it blank and we&apos;ll work it out together.
                      </p>
                    </div>
                  </div>
                </fieldset>

                {/* 03: contact details */}
                <fieldset>
                  <GroupLegend index="03" title="Where do I reply?" />
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                    <div className="min-w-0">
                      <label htmlFor="contact-name" className={LABEL}>
                        Name
                      </label>
                      <input
                        ref={nameRef}
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={values.name}
                        onChange={handleTextChange("name")}
                        onBlur={handleBlur("name")}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={describedBy(errors.name && "contact-name-error")}
                        placeholder="Jane Doe"
                        className={`${fieldClass(Boolean(errors.name))} mt-2`}
                      />
                      <FieldError id="contact-name-error" message={errors.name} />
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="contact-email" className={LABEL}>
                        Email
                      </label>
                      <input
                        ref={emailRef}
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        inputMode="email"
                        spellCheck={false}
                        enterKeyHint="send"
                        value={values.email}
                        onChange={handleTextChange("email")}
                        onBlur={handleBlur("email")}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={describedBy(errors.email && "contact-email-error")}
                        placeholder="jane@company.com"
                        className={`${fieldClass(Boolean(errors.email))} mt-2`}
                      />
                      <FieldError id="contact-email-error" message={errors.email} />
                    </div>
                  </div>
                </fieldset>

                {/* Submit */}
                <div className="flex flex-col gap-6">
                  {status === "error" && (
                    <div
                      ref={errorBoxRef}
                      className="flex items-start gap-3 border border-red-400/40 bg-red-400/5 p-4 text-sm leading-relaxed text-red-300"
                    >
                      <CircleAlert aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
                      <p className="min-w-0">
                        <span className="font-semibold text-red-200">Your message wasn&apos;t sent.</span>{" "}
                        {submitError} Nothing you typed was lost, so try again, or email me at{" "}
                        <a href={`mailto:${EMAIL}`} className={`${INLINE_LINK} wrap-anywhere`}>
                          {EMAIL}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                    <button
                      type="submit"
                      aria-disabled={isSubmitting || undefined}
                      aria-describedby="contact-submit-note"
                      className={`group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-transparent hover:text-white sm:w-auto aria-disabled:pointer-events-none aria-disabled:opacity-70 ${FOCUS_RING}`}
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle
                            aria-hidden="true"
                            size={18}
                            className="animate-spin motion-reduce:animate-none"
                          />
                          Sending…
                        </>
                      ) : status === "error" ? (
                        <>
                          Try again
                          <RotateCcw aria-hidden="true" size={18} />
                        </>
                      ) : (
                        <>
                          Send project brief
                          <ArrowRight
                            aria-hidden="true"
                            size={18}
                            className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                          />
                        </>
                      )}
                    </button>
                    <p id="contact-submit-note" className="text-sm leading-relaxed text-zinc-400">
                      I reply {REPLY_TIME}. Your details are only used to get back to you.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </FadeIn>

          {/* RIGHT: direct line, expectations, services, profiles */}
          <FadeIn delay={200} className="min-w-0 lg:col-span-5 lg:pl-12 xl:pl-16">
            <aside
              aria-label="Other ways to reach me"
              className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-12 lg:grid-cols-1"
            >
              <div id="contact-direct" className="min-w-0 scroll-mt-28">
                <AsideHeading>Prefer to skip the form?</AsideHeading>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`group inline-flex max-w-full items-start gap-2 py-1 text-base font-bold text-foreground sm:text-lg md:text-base lg:text-lg ${FOCUS_RING}`}
                >
                  {/* <wbr> lets a narrow column break before "@" instead of mid-word */}
                  <span className="min-w-0 underline decoration-transparent decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-300 group-hover:decoration-white motion-reduce:transition-none">
                    {EMAIL_USER}
                    <wbr />@{EMAIL_DOMAIN}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={20}
                    className="mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </a>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Write to me directly. Same reply time, no form needed.
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`mt-5 inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black ${FOCUS_RING}`}
                >
                  {copyState === "copied" ? (
                    <Check aria-hidden="true" size={14} strokeWidth={2.5} />
                  ) : (
                    <Copy aria-hidden="true" size={14} />
                  )}
                  {copyState === "copied" ? "Copied" : copyState === "failed" ? "Couldn't copy" : "Copy email"}
                </button>
                <span role="status" className="sr-only">
                  {copyState === "copied"
                    ? "Email address copied to clipboard."
                    : copyState === "failed"
                      ? "Couldn't copy. Select the address and copy it manually."
                      : ""}
                </span>
              </div>

              <div className="min-w-0">
                <AsideHeading>What happens next</AsideHeading>
                <ol className="flex flex-col gap-4">
                  {NEXT_STEPS.map((step, index) => (
                    <li key={step} className="flex gap-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                      <span
                        aria-hidden="true"
                        className="w-6 shrink-0 pt-px font-heading text-sm font-bold tracking-widest text-zinc-600"
                      >
                        {`0${index + 1}`}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {!onServicePage && (
                <div className="min-w-0">
                  <AsideHeading>What I build</AsideHeading>
                  <ul>
                    {SERVICES.map((service) => (
                      <li key={service.slug} className="border-b border-white/10">
                        <Link
                          href={`/services/${service.slug}`}
                          className={`group flex min-h-12 items-center justify-between gap-4 py-2 text-sm font-semibold uppercase tracking-widest text-zinc-300 transition-colors duration-200 hover:text-white ${ROW_FOCUS_RING}`}
                        >
                          <span>{service.linkLabel}</span>
                          <ArrowRight
                            aria-hidden="true"
                            size={16}
                            className="shrink-0 text-zinc-600 transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="min-w-0">
                <AsideHeading>Elsewhere</AsideHeading>
                <ul>
                  {PROFILES.map((profile) => (
                    <li key={profile.href} className="border-b border-white/10">
                      <a
                        href={profile.href}
                        target="_blank"
                        // rel="me" ties these profiles to this site's identity
                        rel="me noopener noreferrer"
                        aria-label={`${profile.label}: ${profile.handle} (opens in a new tab)`}
                        className={`group flex min-h-12 items-center justify-between gap-4 py-2 ${ROW_FOCUS_RING}`}
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors duration-200 group-hover:text-white">
                          {profile.label}
                        </span>
                        <span className="flex min-w-0 items-center gap-2 text-base font-semibold text-foreground">
                          <span className="truncate">{profile.handle}</span>
                          <ArrowUpRight
                            aria-hidden="true"
                            size={18}
                            className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
