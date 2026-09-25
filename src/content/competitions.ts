import type { Project } from "./types";

export const competitions: Project[] = [
  {
    slug: "hackerrank-orchestrate",
    name: "HackerRank Orchestrate — Buy or Wait?",
    shortDescription:
      "Placed 225th of 3,062 (top 8%). A 24-hour financial agent that answers “Can I afford this?” for 250 evaluation requests, using reconstructed cashflow and a 90-day forecast.",
    category: "24-hour hackathon",
    role: "Creator and Developer",
    ownership: "end-to-end",
    ownershipLabel: "End-to-end ownership",
    timeline: "September 2026",
    result: "225th of 3,062",
    listing: "competition",
    technologies: [
      "Python",
      "OpenAI vision",
      "Deterministic forecasting",
      "Output validation",
    ],
    contributions: [
      "Built a complete financial agent for the September 2026 Orchestrate hackathon",
      "Reconstructed cashflow from profiles, events, messages, and images",
      "Decided full payment, partial payment, installments, wait, or not proceed",
      "Kept the 90-day forecast above the user’s minimum balance before recommending a purchase",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sercangundogan/hackerrank-orchestrate-september26",
        external: true,
      },
      {
        label: "Hackathon",
        href: "https://www.hackerrank.com/hackerrank-orchestrate-september26",
        external: true,
      },
    ],
    featured: false,
    images: [],
    caseStudy: {
      overview:
        "Buy or Wait? is the agent I built for HackerRank’s September 2026 Orchestrate hackathon. I placed 225th of 3,062, inside the top 8%. It answers whether someone can afford a purchase without dropping below their minimum balance.",
      context:
        "The hackathon ran for 24 hours. The evaluation set was 250 requests, each with a profile and a mix of events, messages, and images that had to become a cashflow picture before any recommendation.",
      roleDetail:
        "I built the agent end to end during the hackathon: intake, reconstruction, decision policy, and output checks.",
      ownershipDetail:
        "Solo submission. I owned the forecasting approach, the vision step for images, and the rules that gate a purchase.",
      problem:
        "A purchase decision is unsafe if it only looks at the price. The agent has to recover what money is coming in and going out, then see whether the next 90 days stay above the user’s floor.",
      contribution: [
        "Reconstructed cashflow from profiles, events, messages, and images.",
        "Used OpenAI vision where the evidence was an image.",
        "Chose among full payment, partial payment, installments, wait, or not proceed.",
        "Allowed a purchase only when the 90-day forecast stayed above the user’s minimum balance.",
        "Validated outputs before they were returned.",
      ],
      technicalDecisions: [
        "Python for the agent and the evaluation harness.",
        "OpenAI vision for image evidence, with the forecast kept deterministic.",
        "A fixed decision set so every request ends in one allowed outcome.",
        "Output validation so a recommendation cannot skip the balance constraint.",
      ],
      challenges: [
        "Incomplete inputs spread across text, events, and images.",
        "A 24-hour window to make reconstruction and the decision policy reliable together.",
        "Keeping the forecast explainable instead of hiding the affordability rule inside a model.",
      ],
      outcome: [
        "Placed 225th of 3,062 participants, inside the top 8%.",
        "A complete hackathon agent that answers “Can I afford this?” for the 250 evaluation requests.",
        "Public source: github.com/sercangundogan/hackerrank-orchestrate-september26.",
      ],
    },
  },
];
