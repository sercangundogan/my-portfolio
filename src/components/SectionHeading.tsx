import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
