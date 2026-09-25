import { about, achievements, education } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Hüseyin Sercan Gündoğan — frontend-focused Software Developer. TUBITAK TEKNOFEST 2242 3rd Place and academic research project supports.",
  path: "/about",
});

const kindLabel = {
  award: "Award",
  grant: "Research support",
  presentation: "Presentation",
} as const;

export default function AboutPage() {
  const awards = achievements.filter((a) => a.kind === "award");
  const grants = achievements.filter((a) => a.kind === "grant");
  const presentations = achievements.filter((a) => a.kind === "presentation");

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

      <section
        id="achievements"
        className="mt-16 scroll-mt-24 border-t border-border pt-12"
      >
        <h2 className="text-2xl tracking-tight">Academic achievements</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Competition awards and TUBITAK / university research supports from industrial
          engineering studies at Eskisehir Technical University.
        </p>

        <div className="mt-8 grid gap-4">
          {awards.map((item) => (
            <article
              key={item.title}
              className={
                item.featured
                  ? "border border-accent/30 bg-accent-soft/40 p-5"
                  : "border border-border p-5"
              }
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-2 uppercase">
                {kindLabel[item.kind]}
              </p>
              <h3 className="mt-2 text-lg tracking-tight text-foreground">
                {item.title}
              </h3>
              {item.detail ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
            Research project supports
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {grants.map((item) => (
              <li key={item.title} className="border border-border p-4">
                <p className="text-sm font-medium tracking-tight">{item.title}</p>
                {item.detail ? (
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {presentations.length > 0 ? (
          <div className="mt-10">
            <h3 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
              Presentations
            </h3>
            <ul className="mt-4 space-y-3">
              {presentations.map((item) => (
                <li key={item.title} className="border-l border-border pl-3 text-sm">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-2xl tracking-tight">Education</h2>
        <p className="mt-4 text-lg tracking-tight">{education.school}</p>
        <p className="mt-1 text-muted">{education.degree}</p>
        <p className="mt-2 font-mono text-xs text-muted-2">{education.years}</p>
      </section>

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
    </div>
  );
}
