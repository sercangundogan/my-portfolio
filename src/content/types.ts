export type OwnershipType =
  | "end-to-end"
  | "independent"
  | "team"
  | "frontend"
  | "backend-deploy"
  | "coding-lead";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  placeholder: true;
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
  technologies: string[];
  contributions: string[];
  links: ProjectLink[];
  featured: boolean;
  featuredOrder?: number;
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
};
