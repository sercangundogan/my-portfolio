import { about, achievements, education } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Hüseyin Sercan Gündoğan — frontend-focused Software Developer with 4+ years building web and mobile products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="About"
        title="About Sercan"
        description="Frontend-focused Software Developer based in Izmir, Turkey."
      />

      <div className="mt-12 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-2xl tracking-tight">Skills</h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Grouped by how often they show up in real work — not a logo wall.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-2 py-1 font-mono text-[11px] tracking-wide text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl tracking-tight">Education</h2>
          <p className="mt-4 text-lg tracking-tight">{education.school}</p>
          <p className="mt-1 text-muted">{education.degree}</p>
          <p className="mt-2 font-mono text-xs text-muted-2">{education.years}</p>
        </div>
        <div>
          <h2 className="text-2xl tracking-tight">Achievements</h2>
          <ul className="mt-4 space-y-2">
            {achievements.map((item) => (
              <li key={item} className="border-l border-border pl-3 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
