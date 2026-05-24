# Akhilesh Kumar — Minimalist Portfolio

A highly minimal, story-driven, black and white portfolio website built for a Full-Stack Developer. The design focuses on extreme symmetry, strong typography, and a distraction-free user experience, allowing the work to speak for itself.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Space Grotesk (Headings) & Inter (Body) via Google Fonts

## 🛠️ Features

- **Strict B&W Aesthetic:** No colors, just pure black, white, and shades of gray.
- **Story-Driven Flow:** Sections blend seamlessly into one another telling a continuous story.
- **Custom Scroll Animations:** Handcrafted scroll reveal animations using the native `IntersectionObserver` API.
- **Custom Cursor:** A subtle, custom dot cursor that replaces the default pointer.
- **Grain Overlay:** A subtle SVG noise texture overlay that adds depth and a premium feel.
- **Responsive Design:** Completely fluid and responsive down to mobile devices.
- **Contact Form:** Ready-to-use contact form integrated via [Formspree](https://formspree.io/).

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Required Assets Setup

To make this portfolio fully yours, you need to add a few assets to the `public/` folder and update your links:

1. **Resume PDF**: Place your resume in the `public/` directory and name it `resume.pdf`.
2. **Project Images**: Place your project showcase images in the `public/` directory. By default, the code looks for:
   - `scrutin.jpg`
   - `shadowscale.jpg`
   - `lustra.jpg`
3. **Formspree Setup**: Go to `src/components/sections/Contact.tsx` and replace the placeholder Formspree URL with your actual Formspree endpoint.
4. **Social Links**: Update your GitHub, LinkedIn, and Live Demo links in `Contact.tsx` and `Projects.tsx`.

## 📜 License

This project is licensed under the MIT License.
