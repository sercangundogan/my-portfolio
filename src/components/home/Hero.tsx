"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { ResumeButton } from "@/components/ResumeButton";
import { ExternalLink } from "@/components/ExternalLink";
import { getFeaturedProjects } from "@/content/projects";

export function Hero() {
  const reduce = useReducedMotion();
  const featured = getFeaturedProjects();

  const fade = (delay = 0) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="border-border relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--accent-soft),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <motion.p
            className="text-muted-2 font-mono text-xs tracking-[0.16em] uppercase"
            {...fade(0)}
          >
            Frontend-focused Software Developer
          </motion.p>

          <motion.h1
            className="mt-5 max-w-3xl text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
            {...fade(0.05)}
          >
            I build scalable web and mobile products.
          </motion.h1>

          <motion.p
            className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            {...fade(0.1)}
          >
            I&apos;m {siteConfig.shortName}, a Software Developer with 5+ years of
            experience build enterprise SaaS products with React TypeScript, Next.js, and
            React Native
          </motion.p>

          <motion.p
            className="text-muted mt-4 max-w-xl text-base leading-relaxed"
            {...fade(0.14)}
          >
            Currently working at Sociality.io and building independent products such as
            Rewordly, Seoneer, and Livoic.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...fade(0.18)}>
            <Link
              href="/work"
              className="border-foreground bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center border px-4 py-2.5 text-sm font-medium transition-colors"
            >
              View selected work
            </Link>
            <ResumeButton variant="secondary" />
          </motion.div>

          <motion.div
            className="text-muted mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
            {...fade(0.22)}
          >
            <ExternalLink href={siteConfig.links.github} showIcon>
              GitHub
            </ExternalLink>
            <ExternalLink href={siteConfig.links.linkedin} showIcon>
              LinkedIn
            </ExternalLink>
            <ExternalLink href={siteConfig.links.email}>Email</ExternalLink>
            <span className="text-muted inline-flex items-center gap-2">
              <span className="bg-success size-1.5 rounded-full" aria-hidden="true" />
              <span className="text-sm">{siteConfig.availability.label}</span>
            </span>
          </motion.div>
        </div>

        <motion.aside
          className="border-border bg-surface/80 border p-5 backdrop-blur-sm"
          aria-label="Selected projects index"
          {...fade(0.2)}
        >
          <p className="text-muted-2 font-mono text-[11px] tracking-[0.14em] uppercase">
            Selected index
          </p>
          <ol className="divide-border mt-5 divide-y">
            {featured.map((project, index) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group hover:text-accent flex items-baseline justify-between gap-4 py-4 transition-colors"
                >
                  <div>
                    <span className="text-muted-2 mr-3 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="tracking-tight">{project.name}</span>
                    <p className="text-muted group-hover:text-muted mt-1 pl-8 text-xs">
                      {project.ownershipLabel}
                    </p>
                  </div>
                  <span className="text-muted-2 font-mono text-xs" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="border-border mt-2 border-t pt-4">
            <p className="text-muted-2 font-mono text-[11px]">
              Stack focus · React · TypeScript · Next.js · React Native
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
