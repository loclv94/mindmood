import { AboutSection } from "@/components/layouts/sections/sections-about/AboutSection";
import { TeamSection } from "@/components/layouts/sections/sections-about/TeamSection";
import { ContactSection } from "@/components/layouts/sections/sections-about/ContactSection";

export const metadata = {
  title: "About Us - MindMood",
  description: "Learn about MindMood's mission and team",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
