import { competitions } from "@/content/competitions";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Competitions() {
  if (competitions.length === 0) return null;

  return (
    <section id="competitions" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Competitions"
            title="Competitions"
            description="Hackathon submissions I built end to end, on a fixed clock."
          />
        </Reveal>

        <div className="mt-12">
          {competitions.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
