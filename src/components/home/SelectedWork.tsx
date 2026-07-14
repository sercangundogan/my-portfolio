import Link from "next/link";
import { getFeaturedProjects, projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function SelectedWork() {
  const featured = getFeaturedProjects();
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Work"
              title="Selected work"
              description="Projects with clear ownership labels. Independent products and team contributions are listed separately."
            />
            <Link
              href="/work"
              className="text-sm underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {secondary.length > 0 ? (
          <Reveal className="mt-8 border-t border-border pt-10">
            <p className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
              Also
            </p>
            <ul className="mt-4 divide-y divide-border">
              {secondary.map((project) => (
                <li
                  key={project.slug}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-lg tracking-tight hover:text-accent"
                    >
                      {project.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted">{project.ownershipLabel}</p>
                  </div>
                  <p className="max-w-md text-sm text-muted">{project.shortDescription}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
