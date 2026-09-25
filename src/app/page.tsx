import { Hero } from "@/components/home/Hero";
import { Competitions } from "@/components/home/Competitions";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactPreview } from "@/components/home/ContactPreview";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Competitions />
      <SelectedWork />
      <ExperiencePreview />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
