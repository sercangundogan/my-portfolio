import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ContactBlock } from "@/components/ContactBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function ContactPreview() {
  return (
    <section id="contact" className="border-border border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful."
            description="I’m open to software and product engineering roles where I can own products end to end — from the first commit to paying users."
          />
        </Reveal>
        <Reveal className="mt-10" delay={0.06}>
          <ContactBlock />
          <div className="mt-8">
            <Link
              href="/contact"
              className="border-foreground bg-foreground text-background hover:bg-foreground/90 inline-flex border px-4 py-2.5 text-sm font-medium transition-colors"
            >
              Contact page
            </Link>
            <p className="text-muted mt-3 text-sm">{siteConfig.availability.detail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
