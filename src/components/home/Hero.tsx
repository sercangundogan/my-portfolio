import Link from "next/link";
import { siteConfig } from "@/content/site";
import { heroCredentials } from "@/content/credentials";
import { ScrollCue } from "@/components/home/ScrollCue";

const rotatingWords = ["AI products", "extensions", "SaaS", "mobile apps"];
const cycleSeconds = 10;

export function Hero() {
  return (
    <section className="motion-scene border-border relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--accent-soft),transparent_55%)]" />
      <div className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl content-center items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14 lg:px-8 lg:py-16">
        <div className="flex flex-col">
          <p className="border-border bg-surface/70 text-muted inline-flex items-center gap-2.5 self-start rounded-full border px-3.5 py-1.5 text-sm">
            <span
              aria-hidden="true"
              className="bg-success size-2 rounded-full"
              style={{ animation: "pulse-soft 2s infinite" }}
            />
            Software engineer · {siteConfig.location.split(",")[0]} · Open to remote
          </p>

          <h1 className="mt-7 text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1] font-semibold tracking-[-0.045em]">
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

          <p className="text-muted mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">
            I&apos;m {siteConfig.shortName}. Five years on a remote, international team at
            a UK SaaS startup serving 100+ enterprise customers in 20+ countries. Now at
            Panates — and building AI products of my own, with real, paying users.
          </p>

          <div className="mt-10 hidden flex-wrap items-center gap-x-8 gap-y-4 lg:flex">
            <HeroScrollCue />
          </div>
        </div>

        <div>
          <p className="text-muted font-mono text-xs tracking-[0.14em] uppercase">
            Highlights
          </p>
          <ul aria-label="Highlights" className="mt-4 grid grid-cols-2 gap-3">
            {heroCredentials.map((item) => (
              <li key={item.value}>
                <Link
                  href={item.href ?? "#"}
                  className="border-border bg-surface/80 hover:border-foreground flex h-full flex-col rounded-2xl border p-4 shadow-[0_20px_40px_-30px_rgba(20,20,20,0.35)] backdrop-blur-sm transition-colors sm:p-5 lg:min-h-[176px]"
                >
                  <span className="text-2xl leading-tight font-semibold tracking-tight sm:text-[30px]">
                    {item.value}
                  </span>
                  <span className="text-foreground mt-auto pt-4 text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="text-muted mt-1 text-[13px] leading-snug">
                    {item.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:hidden">
          <HeroScrollCue />
        </div>
      </div>
    </section>
  );
}

function HeroScrollCue() {
  return (
    <ScrollCue targetId="track-record">
      See the track record — then watch my products work
    </ScrollCue>
  );
}
