export type ShowcaseScene =
  "rewordly" | "seoneer" | "livoic" | "brandisy" | "video" | "nextspares";

export type ShowcaseItem = {
  /** Anchor id on the home page and key for the animated scene. */
  id: ShowcaseScene;
  /** Case study slug under /work. */
  slug: string;
  name: string;
  kicker: string;
  pitch: string;
  hookLabel: string;
  hook: string;
  /** Bright stage/button color (used with dark text, so it works in both themes). */
  color: string;
  /** CSS variable for theme-aware label text. */
  labelVar: string;
  caseLabel: string;
  live?: { label: string; href: string };
};

export const showcase: ShowcaseItem[] = [
  {
    id: "rewordly",
    slug: "rewordly",
    name: "Rewordly",
    kicker: "Chrome extension + SaaS · ~500 users",
    pitch:
      "Select text on any website. Rewrite it, fix the grammar or change the tone — without leaving the page.",
    hookLabel: "The clever part",
    hook: "One account and one subscription shared between the extension and the web app behind it — with paying customers on it.",
    color: "#7cc4e8",
    labelVar: "var(--p-rewordly)",
    caseLabel: "See how I built it",
    live: { label: "Try it live", href: "https://rewordly.io" },
  },
  {
    id: "seoneer",
    slug: "seoneer",
    name: "Seoneer",
    kicker: "Autonomous AI agent",
    pitch:
      "An AI SEO engineer for your Next.js repo. It reads the product, picks the single most valuable fix and opens a pull request.",
    hookLabel: "The clever part",
    hook: "It never pushes to production. One safe change at a time, always as a PR a human approves.",
    color: "#6fd39a",
    labelVar: "var(--p-seoneer)",
    caseLabel: "See how it decides",
    live: { label: "Try it live", href: "https://seoneer.site" },
  },
  {
    id: "livoic",
    slug: "livoic",
    name: "Livoic",
    kicker: "Realtime extension + backend",
    pitch:
      "Watch any Twitch stream in a language you don’t speak. It listens, translates and puts subtitles on the player — live.",
    hookLabel: "The clever part",
    hook: "Game-aware terminology, so “mid”, “ult” and “flank” come out the way players actually say them.",
    color: "#b794f6",
    labelVar: "var(--p-livoic)",
    caseLabel: "See the realtime pipeline",
  },
  {
    id: "brandisy",
    slug: "brandisy",
    name: "Brandisy",
    kicker: "AI brand generator",
    pitch:
      "Type a business idea. Get a name, logo, palette, typography, guidelines and a downloadable brand pack.",
    hookLabel: "The clever part",
    hook: "One prompt in, a complete and consistent identity out — not six disconnected AI outputs.",
    color: "#f0b37e",
    labelVar: "var(--p-brandisy)",
    caseLabel: "See how I built it",
    live: { label: "Try it live", href: "https://brandisy.io" },
  },
  {
    id: "video",
    slug: "ai-video-transformer",
    name: "AI Video Transformer",
    kicker: "Full-stack AI app",
    pitch:
      "Upload a clip, pick a style, and get it back transformed by AI — with a history of every render.",
    hookLabel: "The clever part",
    hook: "Renders take minutes, so the whole flow is async — webhooks update your history the moment a video is ready.",
    color: "#8ea2ff",
    labelVar: "var(--p-video)",
    caseLabel: "See the architecture",
    live: { label: "Try the demo", href: "https://ai-video-transformer-one.vercel.app" },
  },
  {
    id: "nextspares",
    slug: "nextspares",
    name: "NextSpares",
    kicker: "B2B marketplace · team",
    pitch:
      "Factories sit on spare parts other factories urgently need. NextSpares connects them — and tracks the inventory.",
    hookLabel: "My part",
    hook: "The web and mobile apps of a live B2B product.",
    color: "#e3d26f",
    labelVar: "var(--p-nextspares)",
    caseLabel: "See the work",
    live: { label: "Visit", href: "https://nextspares.com" },
  },
];
