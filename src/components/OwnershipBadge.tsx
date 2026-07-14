import { cn } from "@/lib/cn";

type OwnershipBadgeProps = {
  label: string;
  className?: string;
};

export function OwnershipBadge({ label, className }: OwnershipBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center border border-border bg-surface px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted uppercase",
        className,
      )}
    >
      {label}
    </span>
  );
}
