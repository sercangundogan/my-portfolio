import { siteConfig } from "@/content/site";
import { ExternalLink } from "@/components/ExternalLink";
import { Mail, Code2, AtSign, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

type ContactBlockProps = {
  className?: string;
  compact?: boolean;
};

export function ContactBlock({ className, compact = false }: ContactBlockProps) {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: siteConfig.links.email,
    },
    {
      icon: AtSign,
      label: "LinkedIn",
      value: "linkedin.com/in/sercangundogan",
      href: siteConfig.links.linkedin,
    },
    {
      icon: Code2,
      label: "GitHub",
      value: "github.com/sercangundogan",
      href: siteConfig.links.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: null,
    },
  ];

  return (
    <div className={cn(compact ? "space-y-4" : "space-y-6", className)}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="border border-border bg-surface p-4">
              <div className="mb-2 flex items-center gap-2 text-muted-2">
                <Icon className="size-4" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
              {item.href ? (
                <ExternalLink href={item.href} className="text-sm no-underline">
                  {item.value}
                </ExternalLink>
              ) : (
                <p className="text-sm">{item.value}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
