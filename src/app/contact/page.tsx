import { siteConfig } from "@/content/site";
import { ContactBlock } from "@/components/ContactBlock";
import { ResumeButton } from "@/components/ResumeButton";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Hüseyin Sercan Gündoğan about frontend, software development, and product engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something useful."
        description="I’m open to frontend, software development, and product engineering opportunities where I can contribute to meaningful web and mobile products."
      />

      <div className="mt-12 max-w-3xl">
        <ContactBlock />
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={siteConfig.links.email}
            className="inline-flex items-center justify-center border border-foreground bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Email Sercan
          </a>
          <ResumeButton variant="secondary" />
        </div>
        <p className="mt-6 text-sm text-muted">
          Prefer email for introductions. Include a role link or short context when you
          reach out.
        </p>
      </div>
    </div>
  );
}
