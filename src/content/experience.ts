export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Sociality.io",
    role: "Frontend Developer",
    start: "September 2021",
    end: "Present",
    description:
      "Develops enterprise web and mobile SaaS products using React, TypeScript, Next.js, and React Native.",
    highlights: [
      "Enterprise SaaS product development",
      "Performance optimization",
      "Reusable frontend architecture",
      "REST API integrations",
      "Cross-functional collaboration",
      "React Native development",
      "Production monitoring and delivery",
    ],
  },
  {
    company: "Eleport Cloud Services",
    role: "Software Engineer Intern",
    start: "July 2021",
    end: "August 2021",
    description:
      "Contributed to the development of an enterprise software project built with React and Django REST Framework.",
  },
  {
    company: "İncir R&D",
    role: "Software Engineer Intern",
    start: "May 2021",
    end: "July 2021",
    description:
      "Contributed to frontend and backend development of a decision support system built with Python and Django.",
  },
];

export const education = {
  school: "Eskisehir Technical University",
  degree: "Bachelor of Science in Industrial Engineering",
  years: "2016–2021",
};

export type Achievement = {
  title: string;
  detail?: string;
  /** Highlight on homepage and About for recruiters */
  featured?: boolean;
  kind: "award" | "grant" | "presentation";
};

/**
 * Academic achievements from CV.
 * TUBITAK 2242 is the TEKNOFEST university research competition (3rd place).
 */
export const achievements: Achievement[] = [
  {
    title: "TUBITAK TEKNOFEST 2242 — 3rd Place",
    detail:
      "University Students Research Projects Competition (TUBITAK 2242 / TEKNOFEST)",
    featured: true,
    kind: "award",
  },
  {
    title: "ESTU Project Fair — 3rd Place",
    detail: "Eskisehir Technical University project fair award",
    featured: true,
    kind: "award",
  },
  {
    title: "TUBITAK 2209-A Research Project",
    detail: "University student research project support",
    kind: "grant",
  },
  {
    title: "TUBITAK 2209-B Industry Collaboration Research Project",
    detail: "Industry-collaboration research project support",
    kind: "grant",
  },
  {
    title: "ESTU Scientific Research Project (BAP)",
    detail: "University scientific research project support",
    kind: "grant",
  },
  {
    title: "GLOBCER International Congress — Paper Presentation",
    kind: "presentation",
  },
];

export const featuredAchievements = achievements.filter((a) => a.featured);

export const about = {
  paragraphs: [
    "Sercan is a frontend-focused Software Developer with over four years of professional experience building scalable web and mobile products.",
    "His primary expertise is in React, TypeScript, Next.js, and React Native. He has experience working on enterprise SaaS products, frontend performance, reusable component systems, REST API integrations, CI/CD workflows, and production delivery.",
    "He enjoys working closely with product, design, and backend teams and prefers environments where engineers contribute to technical and product decisions — not only predefined tickets.",
    "He actively uses AI-assisted development tools such as Cursor, Claude Code, ChatGPT, and GitHub Copilot as part of his daily workflow.",
    "Outside software, his interests include swimming, basketball, financial markets, and building independent products.",
  ],
};
