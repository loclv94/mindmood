import { AboutSection } from "@/components/sections-about/AboutSection";
import { TeamSection } from "@/components/sections-about/TeamSection";
import { ContactSection } from "@/components/sections-about/ContactSection";

export const metadata = {
  title: "About Us - MindMood",
  description: "Learn about MindMood's mission and team",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
