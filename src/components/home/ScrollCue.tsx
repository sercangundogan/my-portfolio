"use client";

import type { MouseEvent } from "react";
import { ArrowDown } from "lucide-react";

type ScrollCueProps = {
  targetId: string;
  children: React.ReactNode;
};

/**
 * Scrolls to the next section in JS instead of relying on the hash link alone:
 * a plain `#id` link does nothing visible when the URL already has that hash,
 * and it leaves the hash behind. The href stays as a no-JS fallback.
 */
export function ScrollCue({ targetId, children }: ScrollCueProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="text-muted hover:text-foreground inline-flex items-center gap-3 text-base transition-colors"
    >
      <span
        aria-hidden="true"
        className="border-border-strong grid size-10 place-items-center rounded-full border"
        style={{ animation: "bob 1.8s infinite" }}
      >
        <ArrowDown className="size-[18px]" />
      </span>
      {children}
    </a>
  );
}
