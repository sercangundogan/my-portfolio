import { siteConfig } from "./site";
import type { Project } from "./types";

const chromeStoreUrl = siteConfig.links.chromeWebStore;

export const projects: Project[] = [
  {
    slug: "rewordly",
    name: "Rewordly",
    shortDescription:
      "An AI-powered Chrome extension that helps users rewrite text, correct grammar, adjust tone, and improve clarity directly inside the browser.",
    category: "Independent Product / Chrome Extension",
    role: "Creator and Developer",
    ownership: "end-to-end",
    ownershipLabel: "End-to-end ownership",
    timeline: "2024 – Present",
    technologies: [
      "TypeScript",
      "Chrome Extension APIs",
      "Webpack",
      "Supabase",
      "OpenAI",
      "HTML",
      "CSS",
    ],
    contributions: [
      "Designed and developed the product from scratch",
      "Built browser text-selection interactions and floating controls",
      "Implemented rewrite and grammar correction workflows",
      "Added support for inputs, textareas, and contenteditable elements",
      "Built popup settings, context-menu actions, and keyboard shortcuts",
      "Implemented authentication and usage-limit flows",
      "Added subscription and paid-plan experiences",
      "Developed proactive grammar checking and rewrite alternatives",
      "Managed product UX, architecture, releases, and iteration",
    ],
    links: [
      { label: "Website", href: "https://rewordly.store", external: true },
      {
        label: "GitHub",
        href: "https://github.com/sercangundogan/rewordly",
        external: true,
      },
      ...(chromeStoreUrl
        ? [{ label: "Chrome Web Store", href: chromeStoreUrl, external: true }]
        : [
            {
              label: "Chrome Web Store",
              href: "#chrome-web-store-placeholder",
              external: false,
            },
          ]),
    ],
    featured: true,
    featuredOrder: 2,
    images: [
      {
        src: "/images/projects/rewordly/selection.png",
        alt: "Rewordly text selection with floating rewrite controls",
        width: 1507,
        height: 896,
        caption: "Selection UI and floating controls",
      },
      {
        src: "/images/projects/rewordly/popup.png",
        alt: "Rewordly extension popup settings",
        width: 384,
        height: 580,
        caption: "Extension popup",
      },
      {
        src: "/images/projects/rewordly/rewrite.png",
        alt: "Rewordly rewrite modal",
        width: 580,
        height: 707,
        caption: "Rewrite modal",
      },
      {
        src: "/images/projects/rewordly/grammar.png",
        alt: "Rewordly grammar-check experience",
        width: 573,
        height: 706,
        caption: "Grammar-check experience",
      },
    ],
    caseStudy: {
      overview:
        "Rewordly is an independent Chrome extension that improves writing in place: rewrite, grammar correction, tone control, and clarity improvements without leaving the current page.",
      context:
        "I built Rewordly as an independent product to explore browser-extension UX, selection-based AI workflows, and freemium product mechanics end to end.",
      roleDetail:
        "I own product direction, architecture, implementation, releases, and iteration as creator and developer.",
      ownershipDetail:
        "End-to-end ownership of the extension: UX, TypeScript architecture, Chrome APIs, auth/session handling against the Rewordly web platform, and Pro monetization flows.",
      problem:
        "Writing tools that pull users into a separate app interrupt flow. People already write inside email clients, docs, CMS fields, and chat boxes that behave differently across the web.",
      contribution: [
        "Designed and shipped selection-based rewrite and grammar flows with a floating control and modal review/copy/apply path.",
        "Handled inputs, textareas, and contenteditable surfaces so the extension works across arbitrary host pages.",
        "Shipped popup settings, per-site toggles, context-menu actions, and keyboard shortcuts.",
        "Integrated account session, usage limits, and Pro upgrade experiences with the Rewordly web backend.",
        "Added proactive grammar checking for Pro users and rewrite alternatives.",
      ],
      technicalDecisions: [
        "TypeScript + Webpack bundling for content, background, and popup entry points.",
        "Isolated injected UI styling to reduce host-page CSS collisions.",
        "Backend API on rewordly.store instead of embedding API keys in the extension.",
        "Chrome storage for preferences and install/update state only.",
      ],
      challenges: [
        "Reliable text selection and apply behavior across heterogeneous websites.",
        "Working safely with contenteditable editors.",
        "Injecting UI without breaking host-page styles or layout.",
        "Extension-to-web authentication and session refresh.",
        "Designing free limits and paid-plan feedback without blocking core usability.",
      ],
      outcome: [
        "A shipping independent product with rewrite, grammar, tone, shortcuts, auth, and subscription paths.",
        "A reusable case study of selection-based browser UX and extension–web product integration.",
      ],
    },
  },
  {
    slug: "rewordly-web",
    name: "Rewordly Web",
    shortDescription:
      "The web platform powering Rewordly — marketing site, authentication, dashboard, AI APIs, usage limits, subscriptions, payments, blog, and SEO.",
    category: "SaaS Web Platform",
    role: "Creator and Full-stack Product Developer",
    ownership: "end-to-end",
    ownershipLabel: "End-to-end ownership",
    timeline: "2024 – Present",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "OpenAI",
      "Dodo Payments",
      "Tailwind CSS",
      "Vercel",
      "Webhooks",
    ],
    contributions: [
      "Developed the website and API using Next.js and TypeScript",
      "Integrated OpenAI-powered rewriting and grammar workflows",
      "Implemented Supabase authentication with email OTP and Google login",
      "Built user dashboards and usage-limit systems",
      "Added free and Pro subscription flows",
      "Integrated Dodo Payments and webhook handling",
      "Built billing-management experiences",
      "Implemented SEO-focused blog pages, sitemap generation, and metadata",
      "Deployed and maintained the application on Vercel",
    ],
    links: [
      { label: "Website", href: "https://rewordly.store", external: true },
      {
        label: "GitHub",
        href: "https://github.com/sercangundogan/rewordly-web",
        external: true,
      },
    ],
    featured: true,
    featuredOrder: 3,
    images: [
      {
        src: "/images/projects/rewordly-web/web.png",
        alt: "Rewordly marketing website homepage",
        width: 1898,
        height: 912,
        caption: "Marketing website",
      },
      {
        src: "/images/projects/rewordly-web/dashboard.png",
        alt: "Rewordly account dashboard with Pro plan",
        width: 663,
        height: 789,
        caption: "Account dashboard",
      },
    ],
    caseStudy: {
      overview:
        "Rewordly Web is the SaaS platform behind the Chrome extension: product marketing, auth, account dashboard, AI endpoints, usage metering, subscriptions, billing, and content SEO.",
      context:
        "The extension needed a trustworthy web surface for login, plan management, and AI processing without shipping secrets in the client.",
      roleDetail:
        "I designed and built the platform as creator and full-stack product developer.",
      ownershipDetail:
        "End-to-end ownership of the web product and APIs, including auth, billing integrations, content, and deployment.",
      problem:
        "A browser extension alone cannot own account lifecycle, payments, SEO acquisition, or secure model access. The web platform had to carry product marketing and operational systems.",
      contribution: [
        "Built marketing pages plus authenticated login, logout, and dashboard experiences.",
        "Implemented rewrite and grammar API routes backed by OpenAI.",
        "Added Supabase auth with email OTP and Google login.",
        "Modeled usage limits and free/Pro plan behavior.",
        "Integrated Dodo Payments checkout and webhook handling for billing.",
        "Shipped blog, legal pages, and SEO infrastructure (metadata/sitemap).",
        "Deployed and operate the app on Vercel.",
      ],
      technicalDecisions: [
        "Next.js + TypeScript for both UI and API routes.",
        "Supabase for auth and account data.",
        "Server-side AI calls so keys never live in the extension.",
        "Webhook-driven billing updates for subscription state.",
      ],
      challenges: [
        "Keeping extension sessions and web auth in sync.",
        "Metering usage cleanly across free and Pro tiers.",
        "Building payment and billing UX as a solo product developer.",
        "Balancing marketing, SEO content, and product dashboard in one codebase.",
      ],
      outcome: [
        "A production SaaS surface at rewordly.store supporting the extension’s auth, AI, and monetization paths.",
        "Demonstrates full-stack product ownership beyond UI-only work.",
      ],
    },
  },
  {
    slug: "sociality",
    name: "Sociality.io",
    shortDescription:
      "An all-in-one social media management platform serving more than 100 enterprise customers across 20+ countries.",
    category: "Enterprise SaaS Platform",
    role: "Frontend Developer",
    ownership: "team",
    ownershipLabel: "Professional team contribution",
    timeline: "Sep 2021 – Present",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "Laravel APIs",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "Cloudflare",
      "Sentry",
    ],
    contributions: [
      "Contributes to enterprise web and mobile products",
      "Develops new features and improves existing product modules",
      "Works on performance optimization and long-term frontend maintainability",
      "Builds and improves reusable component architectures",
      "Integrates REST APIs",
      "Collaborates with backend, design, and product teams",
      "Contributes to React Native applications for iOS and Android",
      "Works on experiences involving social media management, engagement, analytics, and content workflows",
      "Participates in production delivery, monitoring, and continuous improvement",
    ],
    links: [{ label: "Website", href: "https://sociality.io", external: true }],
    featured: true,
    featuredOrder: 1,
    images: [
      {
        src: "/images/projects/sociality/web.png",
        alt: "Sociality.io public product visual",
        width: 1898,
        height: 912,
        caption: "Sociality.io public product visual",
      },
      {
        src: "/images/projects/sociality/mobile-publish.webp",
        alt: "Sociality mobile publish dashboard",
        width: 384,
        height: 580,
        caption: "Sociality mobile publish dashboard",
      },
      {
        src: "/images/projects/sociality/mobile-engage.webp",
        alt: "Sociality mobile engage dashboard",
        width: 384,
        height: 580,
        caption: "Sociality mobile engage dashboard",
      },
    ],
    caseStudy: {
      overview:
        "Sociality.io is an enterprise social media management platform. My work is a frontend contribution within a cross-functional product team — not sole product ownership.",
      context:
        "Enterprise customers need reliable web and mobile tools for publishing, engagement, analytics, and content operations across markets.",
      roleDetail:
        "As Frontend Developer I ship features, improve modules, and maintain frontend quality on web and React Native surfaces.",
      ownershipDetail:
        "Professional team contribution. Backend systems, overall product strategy, and customer operations are shared across the company. I contribute frontend architecture, features, integrations, and delivery.",
      problem:
        "Large multi-module SaaS products accumulate UI complexity. The frontend must stay maintainable while shipping new workflows and integrating evolving APIs.",
      contribution: [
        "Develop features and improve existing product modules on the enterprise web product.",
        "Contribute to React Native applications for iOS and Android.",
        "Build and refine reusable component architecture.",
        "Integrate REST APIs and collaborate with backend, design, and product.",
        "Work on performance, maintainability, monitoring, and production delivery.",
      ],
      technicalDecisions: [
        "React and TypeScript as the core web stack, with Next.js where the product uses it.",
        "Redux Toolkit and RTK Query for client state and server data.",
        "Shared discipline around CI/CD, Cloudflare, and Sentry for production quality.",
      ],
      challenges: [
        "Shipping safely in a long-lived enterprise codebase.",
        "Balancing feature velocity with maintainability and performance.",
        "Coordinating web and mobile experiences across a product team.",
      ],
      outcome: [
        "Ongoing contribution to a production enterprise SaaS used by customers in 20+ countries.",
        "Practical experience owning frontend delivery inside a multi-disciplinary team.",
      ],
      confidentialityNote:
        "Internal implementation details, private source code, customer data, and proprietary screens are omitted. Visuals use public marketing assets or placeholders only.",
    },
  },
  {
    slug: "nextspares",
    name: "NextSpares",
    shortDescription:
      "A B2B platform and marketplace that connects factories for spare-parts trade, inventory visibility, and stock optimization.",
    category: "B2B SaaS / Marketplace",
    role: "Frontend and Mobile Developer",
    ownership: "frontend",
    ownershipLabel: "Frontend and mobile contribution",
    timeline: "Ongoing",
    technologies: [
      "React",
      "TypeScript",
      "React Native",
      "REST APIs",
      "Redux Toolkit",
      "RTK Query",
    ],
    contributions: [
      "Responsible for the web frontend and mobile application experiences",
      "Built and iterated product dashboards for marketplace and inventory workflows",
      "Developed mobile app flows supporting factory spare-parts operations",
      "Integrated frontend surfaces with backend APIs",
      "Collaborated with product and backend partners on usable, production-ready interfaces",
    ],
    links: [{ label: "Website", href: "https://nextspares.com", external: true }],
    featured: true,
    featuredOrder: 4,
    images: [
      {
        src: "/images/projects/nextspares/marketplace.png",
        alt: "NextSpares marketplace web dashboard",
        width: 1900,
        height: 908,
        caption: "Marketplace web dashboard",
      },
      {
        src: "/images/projects/nextspares/inventory.png",
        alt: "NextSpares inventory web dashboard",
        width: 1915,
        height: 912,
        caption: "Inventory web dashboard",
      },
    ],
    caseStudy: {
      overview:
        "NextSpares is a spare-parts platform for factories: a global marketplace for buying and selling unused parts, plus inventory tools aimed at reducing downtime and turning warehouse stock into usable value.",
      context:
        "Factories often hold spare inventory that other plants need. NextSpares makes that stock visible, tradable, and manageable in one cloud-based product — including marketplace commerce, inventory tracking, and operational reporting.",
      roleDetail:
        "I am responsible for the frontend and mobile application. Product strategy and backend systems are shared across the team; my focus is the web UI/dashboards and the mobile experience.",
      ownershipDetail:
        "Frontend and mobile contribution within a product team — not sole end-to-end product ownership. Backend, payments, and overall business operations sit with other teammates.",
      problem:
        "Unused spare parts create cost and operational risk when inventory is opaque across sites. Teams need trustworthy marketplace workflows plus day-to-day inventory, scanning, and reporting tools.",
      contribution: [
        "Owned frontend delivery for the web product, including dashboard experiences used for marketplace and inventory operations.",
        "Built and improved the mobile application used alongside the web platform.",
        "Connected UI flows to APIs for listing, purchasing, inventory visibility, and related operational screens.",
        "Worked with design/product/backend partners to ship clear, usable interfaces for factory users.",
      ],
      technicalDecisions: [
        "React and TypeScript for the web frontend and dashboard product surfaces.",
        "React Native for the mobile application.",
        "Client-side data handling patterns consistent with the team’s API-driven architecture (REST).",
      ],
      challenges: [
        "Supporting dense B2B operational workflows without overwhelming factory users.",
        "Keeping web dashboard and mobile experiences aligned across shared domain concepts (inventory, listings, orders).",
        "Delivering production UI against evolving marketplace and inventory requirements.",
      ],
      outcome: [
        "A live product at nextspares.com covering marketplace trading and inventory management for factories.",
        "Demonstrates ownership of frontend and mobile delivery on a real B2B SaaS/marketplace.",
      ],
      confidentialityNote:
        "Internal dashboards may contain operational data. Until approved screenshots are provided, visuals use clearly labeled placeholders. Proprietary implementation details are omitted.",
    },
  },
  {
    slug: "jobswire",
    name: "Jobswire",
    shortDescription:
      "An unreleased hiring-product system I led coding for with a small team — API, messaging service, frontend, and deployment configuration.",
    category: "Software Project (Unreleased)",
    role: "Software Developer — coding ownership",
    ownership: "coding-lead",
    ownershipLabel: "Team project — coding ownership",
    timeline: "2022",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "GraphQL",
      "Apollo Server",
      "WebSockets",
      "Docker",
      "Sentry",
    ],
    contributions: [
      "Owned coding across backend API, messaging service, frontend application, and deployment configs",
      "Built Express/MongoDB API surfaces including auth-related flows and validation",
      "Set up GraphQL messaging service foundations with subscriptions/WebSocket support",
      "Configured multi-service Docker Compose deployment",
      "Collaborated with a team while remaining responsible for implementation",
    ],
    links: [
      {
        label: "Backend",
        href: "https://github.com/sercangundogan/jobswire-backend",
        external: true,
      },
      {
        label: "Message service",
        href: "https://github.com/sercangundogan/jobswire-message",
        external: true,
      },
      {
        label: "Deploy",
        href: "https://github.com/sercangundogan/jobswire-deploy",
        external: true,
      },
      {
        label: "Frontend",
        href: "https://github.com/sercangundogan/jobswire-frontend",
        external: true,
      },
    ],
    featured: false,
    images: [
      {
        src: "/images/projects/jobswire/jobswire.png",
        alt: "Jobswire system overview",
        width: 1536,
        height: 1024,
        caption: "Jobswire system overview",
      },
    ],
    caseStudy: {
      overview:
        "Jobswire was a multi-service hiring product prototype. It was developed with a team but never released to customers. I was responsible for coding across the project.",
      context:
        "The codebase spans a Node/Express API, a GraphQL messaging service, a frontend application, and Docker-based local/deploy configuration. Public mirrors of the work live under my GitHub account.",
      roleDetail:
        "I owned implementation while working with a team. I was responsible for coding the product systems we were building.",
      ownershipDetail:
        "Team project with coding ownership — not a solo founder product and not a production customer deployment. Scope covers backend services, messaging foundations, frontend application work, and deployment configuration.",
      problem:
        "Hiring workflows need coordinated services: accounts and domain APIs, realtime messaging, a client application, and a reproducible deploy path.",
      contribution: [
        "Implemented and maintained the Express/MongoDB backend (auth-related work, validation, API structure, Sentry).",
        "Established the GraphQL messaging service with Apollo Server and WebSocket subscription plumbing.",
        "Contributed the frontend application codebase.",
        "Configured Docker Compose orchestration for the service set.",
      ],
      technicalDecisions: [
        "Service-oriented split (backend, message, frontend, deploy) for independent iteration.",
        "MongoDB/Mongoose for API persistence.",
        "GraphQL + graphql-ws for messaging foundations.",
        "Docker Compose for local multi-service runtime.",
      ],
      challenges: [
        "Coordinating multiple repositories and service boundaries early.",
        "Messaging service remained early-stage relative to the richer backend API.",
        "Shipping rigor for an unreleased product without live customer feedback.",
      ],
      outcome: [
        "A multi-service codebase demonstrating backend, messaging, frontend, and deploy ownership.",
        "The product was never released and has no customers — included as evidence of full-stack coding responsibility, not production traction.",
      ],
    },
  },
  {
    slug: "little-bloomer-emails",
    name: "Little Bloomer Emails",
    shortDescription:
      "A set of responsive HTML email layouts built as a one-time client engagement — welcome, cart abandonment, pre-order, and code-reminder flows.",
    category: "Email Development",
    role: "Frontend / Email Developer",
    ownership: "client",
    ownershipLabel: "One-time client project",
    timeline: "Dec 2023 – Jan 2024",
    technologies: ["HTML", "CSS", "Responsive email", "Cross-client email HTML"],
    contributions: [
      "Designed and coded production-ready HTML email templates for a client brand",
      "Built welcome, cart-abandonment, pre-order, and code-reminder layouts",
      "Handled responsive email structure and client-friendly markup patterns",
      "Prepared image/asset references and polishing passes through delivery",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sercangundogan/little-bloomer-emails",
        external: true,
      },
    ],
    featured: false,
    images: [
      {
        src: "/images/projects/little-bloomer/welcome.png",
        alt: "Little Bloomer welcome email layout",
        width: 450,
        height: 2594,
        caption: "Little Bloomer welcome email layout",
      },
      {
        src: "/images/projects/little-bloomer/cart-abandonment.png",
        alt: "Little Bloomer cart abandonment email layout",
        width: 450,
        height: 1730,
        caption: "Little Bloomer cart abandonment email layout",
      },
    ],
    caseStudy: {
      overview:
        "Little Bloomer Emails is a one-time client project delivering HTML email layouts for transactional and lifecycle messaging.",
      context:
        "The client needed branded email templates that render reliably across mail clients — welcome, recovery, and reminder messages — without building a full product platform.",
      roleDetail:
        "I owned the email HTML/CSS implementation as a frontend / email developer for a fixed client engagement.",
      ownershipDetail:
        "One-time client project completed by January 2024. Scope was email layout development and delivery — not ongoing product ownership.",
      problem:
        "Marketing and lifecycle emails need careful table-based HTML, inline-friendly styling, and layout discipline so they stay usable across Outlook, Gmail, Apple Mail, and mobile clients.",
      contribution: [
        "Implemented welcome, cart-abandonment, pre-order, and code-reminder templates.",
        "Structured responsive, client-safe markup for production sends.",
        "Iterated on layout details (CTAs, spacing, logos) through final handoff.",
      ],
      technicalDecisions: [
        "Hand-authored HTML/CSS email templates rather than a heavy framework.",
        "Asset/image reference workflow suitable for ESP/hosting constraints.",
        "Prettier formatting for maintainable template source.",
      ],
      challenges: [
        "Cross-client rendering quirks common to HTML email.",
        "Balancing brand layout fidelity with constrained email CSS support.",
        "Delivering polished templates on a short client timeline.",
      ],
      outcome: [
        "Delivered a completed email template set for the client in January 2024.",
        "Public source lives at github.com/sercangundogan/little-bloomer-emails.",
      ],
    },
  },
  {
    slug: "anda-emails",
    name: "Anda Emails",
    shortDescription:
      "A broader set of HTML email templates for a client brand — welcome, abandonment, thank-you, compare, and related lifecycle emails — delivered as one-time work.",
    category: "Email Development",
    role: "Frontend / Email Developer",
    ownership: "client",
    ownershipLabel: "One-time client project",
    timeline: "Dec 2023",
    technologies: ["HTML", "CSS", "Responsive email", "Cross-client email HTML"],
    contributions: [
      "Built a larger suite of branded HTML email layouts for a client",
      "Covered welcome, cart/site abandonment, thank-you, compare, and promotional templates",
      "Applied responsive email practices and consistent component patterns across templates",
      "Prepared image/font asset references for production use",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sercangundogan/anda-emails",
        external: true,
      },
    ],
    featured: false,
    images: [
      {
        src: "/images/projects/anda-emails/welcome.png",
        alt: "Anda welcome email layout",
        width: 450,
        height: 3714,
        caption: "Anda welcome email layout",
      },
      {
        src: "/images/projects/anda-emails/cart-abandonment.png",
        alt: "Anda cart abandonment email layout",
        width: 450,
        height: 3930,
        caption: "Anda cart abandonment email layout",
      },
    ],
    caseStudy: {
      overview:
        "Anda Emails is a one-time client engagement producing HTML email layouts across several lifecycle and conversion flows.",
      context:
        "Alongside related email work from late 2023, this project delivered a wider template set for a client brand’s lifecycle messaging.",
      roleDetail:
        "I implemented the email templates as a frontend / email developer under a fixed client scope.",
      ownershipDetail:
        "One-time client project. Not an ongoing product — templates were built and delivered for the client’s use.",
      problem:
        "Client brands often need multiple coordinated email states (welcome, abandon, thank-you, compare) that must stay consistent and render safely in major mail clients.",
      contribution: [
        "Authored templates including welcome, abandon-checkout, cart-abandonment, site-abandonment, thank-you variants, compare, and related layouts.",
        "Kept structure and visual patterns consistent across the suite.",
        "Organized images/fonts and reference notes for handoff.",
      ],
      technicalDecisions: [
        "Production HTML/CSS email templates with cross-client constraints in mind.",
        "Shared formatting setup for maintainable template files.",
      ],
      challenges: [
        "Maintaining visual consistency across many templates.",
        "Email-client CSS limitations versus brand design needs.",
      ],
      outcome: [
        "Completed client email suite delivered in December 2023.",
        "Public source: github.com/sercangundogan/anda-emails.",
      ],
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
