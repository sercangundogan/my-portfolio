import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentWork, getAllWorkSlugs, getWorkBySlug } from "@/content/projects";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ExternalLink } from "@/components/ExternalLink";
import { OwnershipBadge } from "@/components/OwnershipBadge";
import { ProjectImageFrame } from "@/components/ProjectImageFrame";
import { ProjectMetadata } from "@/components/ProjectMetadata";
import { TechList } from "@/components/TechList";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.name,
    description: project.shortDescription,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentWork(slug);
  const { caseStudy } = project;

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
          {project.listing === "competition" ? "Competition" : "Case study"}
        </p>
        <h1 className="mt-4 text-4xl tracking-tight text-balance sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.shortDescription}</p>
        <div className="mt-6">
          <OwnershipBadge label={project.ownershipLabel} />
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          {project.images[0] ? (
            <ProjectImageFrame image={project.images[0]} priority />
          ) : null}

          <CaseStudySection title="Overview">
            <p>{caseStudy.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Context">
            <p>{caseStudy.context}</p>
          </CaseStudySection>

          <CaseStudySection title="My role">
            <p>{caseStudy.roleDetail}</p>
          </CaseStudySection>

          <CaseStudySection title="Ownership">
            <p>{caseStudy.ownershipDetail}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p>{caseStudy.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Contribution">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Technical decisions">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.technicalDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Challenges">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Outcome">
            <ul className="list-disc space-y-2 pl-5">
              {caseStudy.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {caseStudy.confidentialityNote ? (
              <p className="border border-border bg-surface-2 p-4 text-sm">
                {caseStudy.confidentialityNote}
              </p>
            ) : null}
          </CaseStudySection>

          {project.images.length > 1 ? (
            <CaseStudySection title="Visuals">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((image) => (
                  <ProjectImageFrame
                    key={image.src}
                    image={image}
                    className="mx-0 max-w-none"
                  />
                ))}
              </div>
            </CaseStudySection>
          ) : null}

          <CaseStudySection title="Technologies">
            <TechList items={project.technologies} />
          </CaseStudySection>

          <CaseStudySection title="Links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {project.links.map((link) =>
                link.href.startsWith("#") ? (
                  <li key={link.label} className="text-muted-2">
                    {link.label} — link pending
                  </li>
                ) : (
                  <li key={link.label}>
                    <ExternalLink href={link.href} showIcon>
                      {link.label}
                    </ExternalLink>
                  </li>
                ),
              )}
            </ul>
          </CaseStudySection>
        </div>

        <aside className="h-fit border border-border bg-surface p-5 lg:sticky lg:top-20">
          <ProjectMetadata project={project} compact />
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
              Contribution summary
            </p>
            <ul className="mt-3 space-y-2">
              {project.contributions.slice(0, 5).map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav
        className="mt-16 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
        aria-label="Next project"
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="border border-border p-5 transition-colors hover:border-foreground"
          >
            <p className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
              Previous
            </p>
            <p className="mt-2 text-lg tracking-tight">{prev.name}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="border border-border p-5 text-right transition-colors hover:border-foreground sm:justify-self-end sm:text-left"
          >
            <p className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
              Next
            </p>
            <p className="mt-2 text-lg tracking-tight">{next.name}</p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
