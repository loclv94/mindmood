import { HeroSection } from "@/components/layouts/sections/sections-business/HeroSection";
import { FeaturesSection } from "@/components/layouts/sections/sections-business/FeaturesSection";
import { WorkplaceSection } from "@/components/layouts/sections/sections-business/WorkplaceSection";
import { IntegrationSection } from "@/components/layouts/sections/sections-business/IntegrationSection";
import { TeamSection } from "@/components/layouts/sections/sections-business/TeamSection";
import { WhyMattersSection } from "@/components/layouts/sections/sections-business/WhyMattersSection";
import { CTASection } from "@/components/layouts/sections/sections-business/CTASection";
import { ContactFormSection } from "@/components/layouts/sections/sections-business/ContactFormSection";

export const metadata = {
  title: "Business Solutions - MindMood",
  description: "MindMood for workplace mental wellness",
};

export default function BusinessPage() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <WorkplaceSection />

      <hr />

      <IntegrationSection />

      <TeamSection />

      <WhyMattersSection />

      <CTASection />

      <ContactFormSection />
    </>
  );
}
