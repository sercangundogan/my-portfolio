import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { showcase } from "@/content/showcase";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ShowcaseSceneFor } from "@/components/home/ShowcaseScenes";

export function Showcase() {
  return (
    <section id="work" className="border-border border-b">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 py-20 sm:px-6 lg:gap-32 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-muted font-mono text-xs tracking-[0.14em] uppercase">
            Products
          </p>
          <h2 className="mt-3 max-w-3xl text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
            On my own time, I build whole products.
          </h2>
          <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
            Idea, AI, interface, auth and payments — designed, built and launched end to
            end. Don&apos;t read about them; watch them work.
          </p>
          <ul aria-label="Products on this page" className="mt-8 flex flex-wrap gap-2.5">
            {showcase.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="border-border bg-surface/60 hover:border-foreground inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full"
                    style={{ background: item.color }}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        {showcase.map((item, index) => {
          const sceneFirst = index % 2 === 0;
          return (
            <article
              key={item.id}
              id={item.id}
              aria-labelledby={`${item.id}-title`}
              className="grid scroll-mt-20 items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              <Reveal className={sceneFirst ? "lg:order-1" : "lg:order-2"}>
                <ShowcaseSceneFor id={item.id} />
              </Reveal>

              <Reveal className={sceneFirst ? "lg:order-2" : "lg:order-1"} delay={0.05}>
                <p className="font-mono text-[13px]" style={{ color: item.labelVar }}>
                  {String(index + 1).padStart(2, "0")} — {item.kicker}
                </p>
                <h2
                  id={`${item.id}-title`}
                  className="mt-3 text-[clamp(2.5rem,4.4vw,3.75rem)] leading-none font-semibold tracking-[-0.035em]"
                >
                  {item.name}
                </h2>
                <p className="mt-5 text-xl leading-snug sm:text-[22px]">{item.pitch}</p>
                <p className="border-border text-muted mt-6 border-t pt-5 text-base leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    {item.hookLabel}:
                  </strong>{" "}
                  {item.hook}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/work/${item.slug}`}
                    className="inline-flex min-h-12 items-center rounded-[10px] px-5 font-semibold text-[#0b0c0e] transition-opacity hover:opacity-90"
                    style={{ background: item.color }}
                  >
                    {item.caseLabel}
                  </Link>
                  {item.live ? (
                    <a
                      href={item.live.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border-strong hover:border-foreground inline-flex min-h-12 items-center gap-1.5 rounded-[10px] border px-5 font-medium transition-colors"
                    >
                      {item.live.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </Reveal>
            </article>
          );
        })}

        <Reveal>
          <div className="bg-foreground text-background flex flex-wrap items-end justify-between gap-10 rounded-[28px] p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] leading-none font-semibold tracking-[-0.04em]">
                Every one of these started as a blank repo.
              </h2>
              <p className="mt-5 text-lg leading-relaxed opacity-80">
                Each case study walks through the decisions, the trade-offs and the
                challenges. Pick the one you&apos;d have built — I&apos;ll show you how I
                did it.
              </p>
              <p className="mt-7 font-mono text-[13px] opacity-75">
                5 yrs at Sociality.io · 100+ enterprise customers · Top 8% of 3,062 at
                HackerRank Orchestrate
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="bg-background text-foreground inline-flex min-h-[52px] items-center rounded-xl px-6 font-semibold transition-opacity hover:opacity-90"
              >
                All case studies
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center rounded-xl border border-current px-6 font-semibold"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
