export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Primary",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      "Node.js",
      "Express.js",
      "Laravel",
      "Django",
      "Flask",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Data",
    items: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    title: "DevOps and delivery",
    items: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "Cloudflare",
      "CI/CD",
      "Sentry",
    ],
  },
  {
    title: "AI-assisted development",
    items: ["Cursor", "Claude Code", "ChatGPT", "GitHub Copilot", "OpenAI APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "Postman", "Jira", "Figma", "Slack"],
  },
];
