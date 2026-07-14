import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

type ResumeButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ResumeButton({ className, variant = "primary" }: ResumeButtonProps) {
  const styles = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
    secondary:
      "bg-transparent text-foreground border border-border-strong hover:border-foreground",
    ghost: "bg-transparent text-foreground border border-transparent hover:border-border",
  }[variant];

  return (
    <Link
      href={siteConfig.links.resume}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium tracking-tight transition-colors",
        styles,
        className,
      )}
    >
      Download resume
    </Link>
  );
}
