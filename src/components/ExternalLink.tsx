import Link from "next/link";
import { cn } from "@/lib/cn";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  showIcon = false,
}: ExternalLinkProps) {
  const isHash = href.startsWith("#");
  if (isHash) {
    return (
      <span className={cn("text-muted", className)} title="Link coming soon">
        {children}
        <span className="sr-only"> (coming soon)</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-accent hover:underline",
        className,
      )}
    >
      {children}
      {showIcon ? <span aria-hidden="true">↗</span> : null}
    </Link>
  );
}
