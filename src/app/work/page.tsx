import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects by Hüseyin Sercan Gündoğan — Rewordly, Sociality.io, and more — with clear ownership and contribution labels.",
  path: "/work",
});

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Work"
        title="Selected work"
        description="Every project states ownership clearly: independent products, team contributions, and coding-lead work on unreleased systems."
      />

      <div className="mt-14">
        {featured.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
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
