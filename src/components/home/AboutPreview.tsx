import Link from "next/link";
import { about, featuredAchievements } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function AboutPreview() {
  const primary = skillGroups.find((group) => group.title === "Primary");

  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="About" title="About" />
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            More about Sercan
          </Link>
        </Reveal>

        <Reveal delay={0.08} className="space-y-10">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
              Academic highlights
            </p>
            <ul className="mt-4 space-y-4">
              {featuredAchievements.map((item) => (
                <li key={item.title} className="border-l-2 border-accent pl-4">
                  <p className="text-sm font-medium tracking-tight text-foreground">
                    {item.title}
                  </p>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <Link
              href="/about#achievements"
              className="mt-4 inline-flex text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              All academic achievements
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
              Primary stack
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {primary?.items.map((item) => (
                <li
                  key={item}
                  className="border border-border px-2.5 py-1.5 font-mono text-xs tracking-wide text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Skills are grouped by relevance on the{" "}
              <Link href="/about" className="underline-offset-4 hover:underline">
                about page
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
