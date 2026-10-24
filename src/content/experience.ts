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
    company: "Panates",
    role: "Senior Frontend Developer",
    location: "Izmir, Turkey",
    start: "October 2026",
    end: "Present",
    description:
      "Developing and maintaining frontend applications, with a focus on code quality, reusable architecture, and user experience.",
  },
  {
    company: "Sociality.io",
    role: "Frontend Developer",
    location: "London, UK (Remote)",
    start: "September 2021",
    end: "October 2026",
    description:
      "Built and maintained a SaaS platform serving 100+ enterprise customers across 20+ countries using React, TypeScript, Next.js, React Native, and Laravel.",
    highlights: [
      "Helped lead a gradual migration from Laravel/PHP to React and TypeScript while keeping the production product running",
      "Led React Native app development, maintenance, and App Store / Google Play releases",
      "Rebuilt the company website with the team using Next.js, improving Google PageSpeed scores from about 30–40 to 85–95",
      "Developed dashboards, reusable UI components, and API integrations with product, design, and backend teams",
    ],
  },
  {
    company: "Eleport Cloud Services",
    role: "Software Engineer Intern",
    location: "Eskisehir, Turkey",
    start: "July 2021",
    end: "August 2021",
    description:
      "Contributed to an enterprise application using React and Django REST Framework.",
  },
  {
    company: "İncir R&D",
    role: "Software Engineer Intern",
    location: "Eskisehir, Turkey",
    start: "May 2021",
    end: "July 2021",
    description:
      "Developed frontend and backend features for a Python/Django decision support system.",
  },
];

export const education = {
  school: "Eskisehir Technical University",
  degree: "Bachelor of Science in Industrial Engineering",
  years: "2016–2021",
  gpa: "3.24/4.00",
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
    title: "TEKNOFEST / TUBITAK 2242 — 3rd Place",
    detail: "University Students Research Project Competition",
    featured: true,
    kind: "award",
  },
  {
    title: "Technological Forecasting and Social Change — co-author",
    detail:
      "Research paper on exam scheduling and a Python/Django decision support system. SSCI-indexed, Q1, 2024.",
    featured: true,
    kind: "presentation",
  },
  {
    title: "ESTU Project Fair — 3rd Place",
    detail: "Eskisehir Technical University project fair award",
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
    "Sercan is a frontend-focused software engineer with 5+ years of experience building production SaaS, web, and mobile products.",
    "He is a Senior Frontend Developer at Panates. Previously he spent five years at Sociality.io, working on React, TypeScript, Next.js, and React Native for an enterprise SaaS used by customers in 20+ countries.",
    "He enjoys working closely with product, design, and backend teams and prefers environments where engineers contribute to technical and product decisions — not only predefined tickets.",
    "He actively uses AI-assisted development tools such as Cursor, Claude Code, ChatGPT, and GitHub Copilot as part of his daily workflow.",
    "Outside software, his interests include swimming, basketball, financial markets, and building independent products.",
  ],
};
