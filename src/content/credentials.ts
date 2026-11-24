/** Above-the-fold proof points, taken from the CV. */
export type Credential = {
  value: string;
  label: string;
  detail: string;
  href?: string;
};

export const heroCredentials: Credential[] = [
  {
    value: "3rd in Turkey",
    label: "TEKNOFEST · TÜBİTAK 2242",
    detail: "National university research project competition",
    href: "/about#achievements",
  },
  {
    value: "Top 8%",
    label: "HackerRank Orchestrate",
    detail: "225th of 3,062 — AI agent built in 24 hours",
    href: "/work/hackerrank-orchestrate",
  },
  {
    value: "5 years",
    label: "Global SaaS startup",
    detail: "Remote, international team at a UK company",
    href: "#track-record",
  },
  {
    value: "Q1 journal",
    label: "Published research",
    detail: "Technological Forecasting and Social Change, 2024",
    href: "/about#achievements",
  },
];

export type TrackRecordItem = {
  value: string;
  title: string;
  detail: string;
};

/** Sociality.io impact, from the CV. */
export const trackRecord: TrackRecordItem[] = [
  {
    value: "85–95",
    title: "Google PageSpeed, up from 30–40",
    detail: "after rebuilding the company website in Next.js.",
  },
  {
    value: "35%+",
    title: "Revenue growth",
    detail: "in the period after the new website launched.",
  },
  {
    value: "650+",
    title: "Components migrated",
    detail:
      "Co-led the move from Laravel/PHP to React + TypeScript — 50+ screens, while the product stayed live.",
  },
  {
    value: "25+",
    title: "Mobile releases",
    detail: "Owned the React Native app on iOS and Android, from v1.6 to v2.0.",
  },
  {
    value: "Claude + ChatGPT",
    title: "AI in production",
    detail:
      "Built the frontend for the MCP integration that connects customers’ AI assistants to their social data.",
  },
  {
    value: "100+",
    title: "Enterprise customers",
    detail: "in 20+ countries, built in English with a fully remote team.",
  },
];
