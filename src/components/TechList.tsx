import { cn } from "@/lib/cn";

type TechListProps = {
  items: string[];
  className?: string;
};

export function TechList({ items, className }: TechListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="border border-border px-2 py-1 font-mono text-[11px] tracking-wide text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
