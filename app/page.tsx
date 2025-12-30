import { HeroSlider } from "@/components/sections-home/HeroSlider";
import { IntroSection } from "@/components/sections-home/IntroSection";
import { FeaturesSection } from "@/components/sections-home/FeaturesSection";
import { MissionSection } from "@/components/sections-home/MissionSection";
import { WorkplaceSection } from "@/components/sections-home/WorkplaceSection";
import { IndividualSection } from "@/components/sections-home/IndividualSection";
import { ManifestoSection } from "@/components/sections-home/ManifestoSection";
import { CoreValuesSection } from "@/components/sections-home/CoreValuesSection";
import { TestimonialSlider } from "@/components/sections-home/TestimonialSlider";
import { ConfidentialitySection } from "@/components/sections-home/ConfidentialitySection";
import { CTASection } from "@/components/sections-home/CTASection";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { TogetherSection } from "@/components/sections-home/TogetherSection";

export default function HomePage() {
  return (
    <div className="bg-gray-100 box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="relative text-slate-700 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px_inset] box-border caret-transparent clear-both z-[1]">
        <HeroSlider />
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
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
