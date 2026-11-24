import Link from "next/link";
import { trackRecord } from "@/content/credentials";
import { Reveal } from "@/components/Reveal";

export function TrackRecord() {
  return (
    <section
      id="track-record"
      aria-labelledby="track-record-title"
      className="border-border bg-surface scroll-mt-14 border-b"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-muted font-mono text-xs tracking-[0.14em] uppercase">
                Track record
              </p>
              <h2
                id="track-record-title"
                className="mt-3 text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]"
              >
                Five years shipping a global SaaS.
              </h2>
              <p className="text-muted mt-5 text-lg leading-relaxed">
                At <span className="text-foreground font-medium">Sociality.io</span> — a
                London startup — I worked in English with a fully remote, international
                team on a product used by enterprise brands around the world. Measured
                results:
              </p>
            </div>
            <p className="text-muted shrink-0 font-mono text-[13px] leading-relaxed">
              London, UK (remote)
              <br />
              Sep 2021 – Oct 2026
            </p>
          </div>
        </Reveal>

        <ul className="bg-border border-border mt-12 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
          {trackRecord.map((item, index) => (
            <li key={item.title} className="bg-surface">
              <Reveal delay={index * 0.04} className="h-full p-6 sm:p-8">
                <p className="text-[clamp(1.75rem,2.6vw,2.25rem)] leading-none font-semibold tracking-[-0.03em]">
                  {item.value}
                </p>
                <p className="text-foreground mt-4 font-medium">{item.title}</p>
                <p className="text-muted mt-1.5 text-[15px] leading-relaxed">
                  {item.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted text-[15px]">
            Now at <span className="text-foreground font-medium">Panates</span>, building
            internal products with React, Next.js and TypeScript.
          </p>
          <Link
            href="/experience"
            className="hover:text-accent text-sm font-medium underline-offset-4 transition-colors hover:underline"
          >
            Full timeline →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
