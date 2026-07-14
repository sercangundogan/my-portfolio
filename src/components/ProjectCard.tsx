import Link from "next/link";
import type { Project } from "@/content/types";
import { OwnershipBadge } from "@/components/OwnershipBadge";
import { TechList } from "@/components/TechList";
import { ExternalLink } from "@/components/ExternalLink";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group border-t border-border py-10 transition-colors first:border-t-0 first:pt-0",
        className,
      )}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {typeof index === "number" ? (
              <span className="font-mono text-xs text-muted-2">
                {String(index + 1).padStart(2, "0")}
              </span>
            ) : null}
            <OwnershipBadge label={project.ownershipLabel} />
          </div>
          <h3 className="text-2xl tracking-tight sm:text-3xl">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
                Role
              </dt>
              <dd className="mt-1 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
                Type
              </dt>
              <dd className="mt-1 text-sm">{project.category}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
                Timeline
              </dt>
              <dd className="mt-1 text-sm">{project.timeline}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
              Contribution
            </p>
            <ul className="mt-3 space-y-2">
              {project.contributions.slice(0, 4).map((item) => (
                <li key={item} className="border-l border-border pl-3 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <TechList items={project.technologies.slice(0, 8)} />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/work/${project.slug}`}
                className="font-medium underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                View case study
              </Link>
              {project.links.slice(0, 2).map((link) =>
                link.external ? (
                  <ExternalLink key={link.label} href={link.href} showIcon>
                    {link.label}
                  </ExternalLink>
                ) : (
                  <span key={link.label} className="text-muted-2">
                    {link.label} (soon)
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
