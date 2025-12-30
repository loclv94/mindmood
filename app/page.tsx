import { HeroSlider } from "@/components/sections-home/HeroSlider";
import { IntroSection } from "@/components/sections-home/IntroSection";
import { FeaturesSection } from "@/components/sections-home/FeaturesSection";
import { MissionSection } from "@/components/sections-home/MissionSection";
import { WorkplaceSection } from "@/components/sections-home/WorkplaceSection";
import { IndividualSection } from "@/components/sections-home/IndividualSection";
import { ManifestoSection } from "@/components/sections-home/ManifestoSection";
import { CoreValuesSection } from "@/components/sections-home/CoreValuesSection";
import { VideoSection } from "@/components/sections-home/VideoSection";
import { ConfidentialitySection } from "@/components/sections-home/ConfidentialitySection";
import { CTASection } from "@/components/sections-home/CTASection";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { ContactSection } from "@/components/sections-home/ContactSection";
import { Container } from "@/components/Container";

export default function HomePage() {
  return (
    <div className="bg-gray-100 box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="relative text-slate-700 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px_inset] box-border caret-transparent clear-both z-[1]">
        <HeroSlider />
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
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

      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <Container>
          <VideoSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <ConfidentialitySection />
        </Container>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
        <Container>
          <CTASection />
        </Container>
      </div>
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <Container>
          <DisclaimerSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <ContactSection />
        </Container>
      </div>
    </div>
  );
}
