import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ExternalLink } from "@/components/ExternalLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-lg tracking-tight">{siteConfig.name}</p>
            <p className="mt-2 max-w-md text-sm text-muted">
              Frontend-focused Software Developer building web and mobile products.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <ExternalLink href={siteConfig.links.github} showIcon>
              GitHub
            </ExternalLink>
            <ExternalLink href={siteConfig.links.linkedin} showIcon>
              LinkedIn
            </ExternalLink>
            <ExternalLink href={siteConfig.links.email}>Email</ExternalLink>
            <Link
              href={siteConfig.links.resume}
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
