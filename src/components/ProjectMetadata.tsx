import type { Project } from "@/content/types";
import { OwnershipBadge } from "@/components/OwnershipBadge";
import { TechList } from "@/components/TechList";
import { cn } from "@/lib/cn";

type ProjectMetadataProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

export function ProjectMetadata({
  project,
  className,
  compact = false,
}: ProjectMetadataProps) {
  const rows = [
    { label: "Type", value: project.category },
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <div className={cn("space-y-4", className)}>
      <OwnershipBadge label={project.ownershipLabel} />
      <dl
        className={cn(
          "grid gap-3",
          compact ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {rows.map((row) => (
          <div key={row.label} className="border-t border-border pt-3">
            <dt className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
              {row.label}
            </dt>
            <dd className="mt-1 text-sm text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
      {!compact ? <TechList items={project.technologies} /> : null}
    </div>
  );
}
