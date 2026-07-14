import { experience } from "@/content/experience";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Professional experience for Hüseyin Sercan Gündoğan — Sociality.io, İncir Ar-Ge, and Gravit.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Experience"
        description="A concise timeline of professional and internship roles."
      />
      <div className="mt-12">
        {experience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </div>
  );
}
