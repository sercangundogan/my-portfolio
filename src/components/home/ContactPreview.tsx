import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ContactBlock } from "@/components/ContactBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ContactPreview() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful."
            description="I’m open to frontend, software development, and product engineering opportunities where I can contribute to meaningful web and mobile products."
          />
        </Reveal>
        <Reveal className="mt-10" delay={0.06}>
          <ContactBlock />
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex border border-foreground bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Contact page
            </Link>
            <p className="mt-3 text-sm text-muted">{siteConfig.availability.detail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
