export const siteConfig = {
  name: "Hüseyin Sercan Gündoğan",
  shortName: "Sercan",
  title: "Hüseyin Sercan Gündoğan — Software Engineer",
  description:
    "Software engineer who builds products end to end: React, TypeScript, Next.js and React Native on the front, Node.js, Python and PostgreSQL behind them. Five years on a SaaS serving 100+ enterprise customers, and creator of Rewordly, Seoneer and Brandisy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sercangundogan.com",
  locale: "en_US",
  location: "Izmir, Turkey",
  email: "sercangundogan35@gmail.com",
  availability: {
    label: "Open to opportunities",
    detail: "Software, product and full-stack engineering roles — remote or Izmir",
  },
  links: {
    github: "https://github.com/sercangundogan",
    linkedin: "https://linkedin.com/in/sercangundogan",
    email: "mailto:sercangundogan35@gmail.com",
    resume: process.env.NEXT_PUBLIC_RESUME_URL ?? "/resume.pdf",
    chromeWebStore: process.env.NEXT_PUBLIC_CHROME_WEB_STORE_URL ?? "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
