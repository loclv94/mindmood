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

export default function HomePage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="relative text-slate-700 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px_inset] box-border caret-transparent clear-both z-[1]">
        <HeroSlider />
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
        <IntroSection />
      </div>
      <FeaturesSection />
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <MissionSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <WorkplaceSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <IndividualSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <ManifestoSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <CoreValuesSection />
        </div>
      </div>
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <VideoSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <ConfidentialitySection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <CTASection />
        </div>
      </div>
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <DisclaimerSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
