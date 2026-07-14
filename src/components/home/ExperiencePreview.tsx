import Link from "next/link";
import { experience } from "@/content/experience";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ExperiencePreview() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Experience"
              title="Where I've been building"
              description="Frontend work on enterprise SaaS, with earlier internship experience on full-stack systems."
            />
            <Link
              href="/experience"
              className="text-sm underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Full timeline
            </Link>
          </div>
        </Reveal>
        <div className="mt-10">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
