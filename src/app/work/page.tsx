import { competitions } from "@/content/competitions";
import { getFeaturedProjects, projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Competitions and selected projects by Hüseyin Sercan Gündoğan — HackerRank Orchestrate, Sociality.io, Rewordly, Brandisy, and more.",
  path: "/work",
});

export default function WorkPage() {
  const featured = getFeaturedProjects();
  const secondary = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Work"
        title="Selected work"
        description="Competitions come first. Projects below state ownership clearly: independent products, team contributions, and coding-lead work."
      />

      <div className="mt-14">
        <h2 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
          Competitions
        </h2>
        <div className="mt-8">
          {competitions.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-12">
        <h2 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
          Projects
        </h2>
        <div className="mt-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {secondary.length > 0 ? (
        <div className="mt-6 border-t border-border pt-12">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
            Additional projects
          </h2>
          <div className="mt-4">
            {secondary.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
