export type OwnershipType =
  | "end-to-end"
  | "independent"
  | "team"
  | "frontend"
  | "backend-deploy"
  | "coding-lead"
  | "client";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Mark true only for temporary SVG/placeholder assets */
  placeholder?: boolean;
  caption?: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
};

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  role: string;
  ownership: OwnershipType;
  ownershipLabel: string;
  timeline: string;
  /** Compact result line, used for competitions shown above projects. */
  result?: string;
  technologies: string[];
  contributions: string[];
  links: ProjectLink[];
  featured: boolean;
  featuredOrder?: number;
  /** Competitions render above projects and use a competition case-study label. */
  listing?: "project" | "competition";
  images: ProjectImage[];
  caseStudy: {
    overview: string;
    context: string;
    roleDetail: string;
    ownershipDetail: string;
    problem: string;
    contribution: string[];
    technicalDecisions: string[];
    challenges: string[];
    outcome: string[];
    confidentialityNote?: string;
  };
};

export const ownershipLabels: Record<OwnershipType, string> = {
  "end-to-end": "End-to-end ownership",
  independent: "Independent product",
  team: "Professional team contribution",
  frontend: "Frontend contribution",
  "backend-deploy": "Backend and deployment contribution",
  "coding-lead": "Team project — coding ownership",
  client: "One-time client project",
};
