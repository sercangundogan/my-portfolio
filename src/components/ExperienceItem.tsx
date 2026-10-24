import type { ExperienceItem as ExperienceData } from "@/content/experience";
import { cn } from "@/lib/cn";

type ExperienceItemProps = {
  item: ExperienceData;
  className?: string;
};

export function ExperienceItem({ item, className }: ExperienceItemProps) {
  return (
    <article
      className={cn(
        "grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr] md:gap-10",
        className,
      )}
    >
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-2">
          {item.start} — {item.end}
        </p>
        <h3 className="mt-2 text-lg tracking-tight">{item.role}</h3>
        <p className="mt-1 text-muted">{item.company}</p>
        {item.location ? (
          <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-2 uppercase">
            {item.location}
          </p>
        ) : null}
      </div>
      <div>
        <p className="leading-relaxed text-muted">{item.description}</p>
        {item.highlights?.length ? (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l border-border pl-3 text-sm text-foreground/90"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
