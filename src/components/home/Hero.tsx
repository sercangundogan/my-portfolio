import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { showcase } from "@/content/showcase";

const rotatingWords = ["AI products", "extensions", "SaaS", "mobile apps"];
const cycleSeconds = 10;

export function Hero() {
  return (
    <section className="motion-scene border-border relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--accent-soft),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="border-border bg-surface/70 text-muted inline-flex items-center gap-2.5 self-start rounded-full border px-3.5 py-1.5 text-sm">
          <span
            aria-hidden="true"
            className="bg-success size-2 rounded-full"
            style={{ animation: "pulse-soft 2s infinite" }}
          />
          Software engineer · {siteConfig.location.split(",")[0]} · Open to remote
        </p>

        <h1 className="mt-8 text-[clamp(2.75rem,7.2vw,7rem)] leading-[1] font-semibold tracking-[-0.045em]">
          <span className="sr-only">
            I turn ideas into AI products, extensions, SaaS and mobile apps — and ship
            them.
          </span>
          <span aria-hidden="true">
            I turn ideas into
            <br />
            <span className="text-accent inline-grid">
              {rotatingWords.map((word, i) => (
                <span
                  key={word}
                  className={`whitespace-nowrap [grid-area:1/1] ${i > 0 ? "rm-hide" : ""}`}
                  style={{
                    animation: `hw ${cycleSeconds}s ${(i * cycleSeconds) / rotatingWords.length}s infinite both`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            <br />
            and ship them.
          </span>
        </h1>

        <p className="text-muted mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
          I&apos;m {siteConfig.shortName}. I build whole products — the AI, the interface,
          the payments. Five years on a SaaS used by 100+ enterprise customers in 20+
          countries, and products of my own with real, paying users.
        </p>

        <ul aria-label="Projects on this page" className="mt-10 flex flex-wrap gap-2.5">
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

        <a
          href="#work"
          className="text-muted hover:text-foreground mt-12 inline-flex items-center gap-3 self-start text-base transition-colors"
        >
          <span
            aria-hidden="true"
            className="border-border-strong grid size-10 place-items-center rounded-full border"
            style={{ animation: "bob 1.8s infinite" }}
          >
            <ArrowDown className="size-[18px]" />
          </span>
          Don&apos;t read about them — watch them work
        </a>
      </div>
    </section>
  );
}
