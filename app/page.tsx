import { HeroSlider } from "@/components/layouts/sections/sections-home/HeroSlider";
import { IntroSection } from "@/components/layouts/sections/sections-home/IntroSection";
import { FeaturesSection } from "@/components/layouts/sections/sections-home/FeaturesSection";
import { MissionSection } from "@/components/layouts/sections/sections-home/MissionSection";
import { WorkplaceSection } from "@/components/layouts/sections/sections-home/WorkplaceSection";
import { IndividualSection } from "@/components/layouts/sections/sections-home/IndividualSection";
import { ManifestoSection } from "@/components/layouts/sections/sections-home/ManifestoSection";
import { CoreValuesSection } from "@/components/layouts/sections/sections-home/CoreValuesSection";
import { TestimonialSlider } from "@/components/layouts/sections/sections-home/TestimonialSlider";
import { ConfidentialitySection } from "@/components/layouts/sections/sections-home/ConfidentialitySection";
import { CTASection } from "@/components/layouts/sections/sections-home/CTASection";
import { DisclaimerSection } from "@/components/layouts/sections/DisclaimerSection";
import { TogetherSection } from "@/components/layouts/sections/sections-home/TogetherSection";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <HeroSlider />

      <div className="text-brand bg-white clear-both float-left w-full">
        <IntroSection />
      </div>

      <FeaturesSection />

      <MissionSection />

      <div className="mt-12.5" />

      <WorkplaceSection />

      <div className="mt-12.5" />

      <IndividualSection />

      <div className="mt-12.5" />

      <ManifestoSection />

      <div className="mt-12.5" />

      <CoreValuesSection />

      <div className="mt-12.5" />

      <TestimonialSlider />

      <ConfidentialitySection />

      <CTASection />

      <hr />

      <TogetherSection />

      <DisclaimerSection />
    </div>
  );
}
