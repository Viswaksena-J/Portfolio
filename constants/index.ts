import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ---------------------------------------------------------------------------
// Skills — curated from résumé as an INVERTED pyramid, grouped by category.
// Row layout (see SKILL_PYRAMID_ROWS): 10 · 8 · 4 · 2 = 24
//   Row 1 (10) Frontend · Row 2 (8) Backend & Data · Row 3 (4) AI & Design ·
//   Row 4 (2) Mobile
// ---------------------------------------------------------------------------

export const Skill_data = [
  // ── Row 1 (10) · Frontend ────────────────────────────────────────────────
  { skill_name: "React", Image: "/react.png", category: "Frontend" },
  { skill_name: "Next.js", Image: "/next.png", category: "Frontend" },
  { skill_name: "TypeScript", Image: "/ts.png", category: "Frontend" },
  { skill_name: "JavaScript", Image: "/js.png", category: "Frontend" },
  { skill_name: "HTML 5", Image: "/html.png", category: "Frontend" },
  { skill_name: "CSS 3", Image: "/css.png", category: "Frontend" },
  { skill_name: "Tailwind CSS", Image: "/tailwind.png", category: "Frontend" },
  { skill_name: "Framer Motion", Image: "/framer.png", category: "Frontend" },
  { skill_name: "GSAP", Image: "/gsap.svg", category: "Frontend" },
  { skill_name: "Lenis", Image: "/lenis.svg", category: "Frontend" },

  // ── Row 2 (8) · Backend & Data ───────────────────────────────────────────
  { skill_name: "Node.js", Image: "/node-js.png", category: "Backend" },
  { skill_name: "Express", Image: "/express.png", category: "Backend" },
  { skill_name: "Strapi CMS", Image: "/strapi.svg", category: "Backend" },
  { skill_name: "Python", Image: "/Python.svg.png", category: "Backend" },
  { skill_name: "MongoDB", Image: "/mongodb.png", category: "Database" },
  { skill_name: "Firebase", Image: "/Firebase.png", category: "Database" },
  { skill_name: "PostgreSQL", Image: "/postger.png", category: "Database" },
  { skill_name: "MySQL", Image: "/mysql.png", category: "Database" },

  // ── Row 3 (4) · AI & Design ──────────────────────────────────────────────
  { skill_name: "OpenAI", Image: "/openai.svg", category: "AI" },
  { skill_name: "Cursor", Image: "/cursor.svg", category: "AI" },
  { skill_name: "Claude Code", Image: "/claude.svg", category: "AI" },
  { skill_name: "Figma", Image: "/figma.png", category: "Design" },

  // ── Row 4 (2) · Mobile ───────────────────────────────────────────────────
  { skill_name: "Flutter", Image: "/flutter.svg", category: "Mobile" },
  { skill_name: "Dart", Image: "/dart.svg", category: "Mobile" },
];

// Inverted-pyramid row widths — must sum to Skill_data.length (24).
export const SKILL_PYRAMID_ROWS = [10, 8, 4, 2];

// ---------------------------------------------------------------------------
// Experience — from résumé
// ---------------------------------------------------------------------------

export const Experiences = [
  {
    company: "SurveySparrow",
    role: "Frontend Developer",
    period: "Feb 2025 — Present",
    points: [
      "Designed and shipped an end-to-end AI Survey Generator — a public lead-gen tool that turns a natural-language prompt into a complete, editable survey via OpenAI, with conversational LLM-powered editing (RFC 6902 JSON-patch), live in-product preview through the SurveySparrow API, and a signup-gated free tier.",
      "Optimized Core Web Vitals (LCP, CLS, INP, TBT) to 100% green across 1,743 indexed desktop pages and all tracked mobile pages, lifting performance, UX, and SEO.",
      "Introduced the company's first animated webpage and built custom AI-powered Strapi plugins for translation and interlinking — saving ~$5,940/year and cutting content & link-management effort by hours per task.",
      "Collaborated with Product, Performance Marketing, and Growth to ship high-impact marketing pages driving user acquisition.",
    ],
    tags: ["Next.js", "React", "OpenAI", "Strapi", "GSAP", "Core Web Vitals"],
  },
  {
    company: "Amrita Center for Wireless Networks & Applications",
    role: "Intern",
    period: "May 2023 — Jan 2025",
    points: [
      "Built VCOM, a village e-commerce app (Flutter, Node.js, SQL) pairing conventional commerce with insights into best-selling local products and direct user-to-shop-manager communication.",
      "Led UI/UX design and prototyping for 150+ screens in Figma, fostering personalized shopping and community engagement.",
    ],
    tags: ["Flutter", "Node.js", "SQL", "Figma", "UI/UX"],
  },
];

// ---------------------------------------------------------------------------
// Projects — from résumé (icon + gradient cards, no screenshots needed)
// ---------------------------------------------------------------------------

export const Projects_data = [
  {
    title: "AI Survey Generator",
    description:
      "A public lead-gen tool that turns a natural-language prompt into a complete, editable survey via OpenAI — with conversational LLM editing (RFC 6902 JSON-patch) and live in-product preview through the SurveySparrow API.",
    tags: ["Next.js", "OpenAI", "TypeScript", "REST"],
    accent: "from-purple-500 to-cyan-500",
    period: "2026",
  },
  {
    title: "Echo — Animated Landing Page",
    description:
      "SurveySparrow's first fully animated marketing page — a scroll-driven, cinematic experience built with GSAP and Lenis for buttery-smooth motion, launching the Echo product.",
    tags: ["GSAP", "Lenis", "Next.js", "Animation"],
    accent: "from-indigo-500 via-purple-500 to-pink-500",
    period: "2026",
    link: "https://surveysparrow.com/echo",
  },
  {
    title: "AI Figma Design Reviewer Agent",
    description:
      "An AI agent that analyzes Dev-Ready designs, validates Design-System compliance, and flags arbitrary values & component misuse — automating feedback through Figma comments, designer tagging, and revalidation.",
    tags: ["AI Agent", "Figma API", "Automation"],
    accent: "from-fuchsia-500 to-purple-600",
    period: "2026",
  },
  {
    title: "CitizenSafeID",
    description:
      "A facial-recognition-powered payment and document-management system with secure storage/retrieval for public environments, built on an intuitive Flutter UI over SQLite.",
    tags: ["Flutter", "SQLite", "Face Recognition"],
    accent: "from-cyan-500 to-blue-600",
    period: "2023 — 2024",
  },
  {
    title: "Echo — Tabletop Robot",
    description:
      "User-centric Django software for a tabletop robot built for people with disabilities, recommending Music & Video content by analysing facial expressions.",
    tags: ["Django", "Python", "Computer Vision"],
    accent: "from-emerald-500 to-cyan-500",
    period: "2022 — 2023",
  },
];

// ---------------------------------------------------------------------------
// Achievements — from résumé
// ---------------------------------------------------------------------------

export const Achievements = [
  {
    title: "Sustainable Development Ideathon",
    place: "1st Prize",
    description:
      "Proposed an AI-driven agricultural management system with automated pest control, soil analysis, market forecasting, and personalised farmer assistance.",
  },
  {
    title: "Idea Ignite",
    place: "8th Position",
    description:
      "Designed a traffic-accident-detection web app using the YOLO algorithm — generating AI reports and alerting police, rescuers, and families.",
  },
];

// ---------------------------------------------------------------------------
// Socials
// ---------------------------------------------------------------------------

export const Socials = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Viswaksena-J",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/viswaksena-j",
  },
];
