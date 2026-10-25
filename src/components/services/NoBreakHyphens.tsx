import { Fragment } from "react";

/**
 * Keeps hyphenated words ("E-commerce") on one line without changing the text itself,
 * so find-in-page, copy/paste and the JSON-LD names still match the visible heading.
 */
export default function NoBreakHyphens({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          {word.includes("-") ? <span className="whitespace-nowrap">{word}</span> : word}
        </Fragment>
      ))}
    </>
  );
}
