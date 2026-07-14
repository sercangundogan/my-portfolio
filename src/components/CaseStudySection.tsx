import { cn } from "@/lib/cn";

type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function CaseStudySection({
  title,
  children,
  className,
  id,
}: CaseStudySectionProps) {
  return (
    <section id={id} className={cn("border-t border-border py-10", className)}>
      <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
        <h2 className="font-mono text-xs tracking-[0.14em] text-muted-2 uppercase">
          {title}
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
