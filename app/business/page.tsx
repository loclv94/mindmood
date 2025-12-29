import { HeroSection } from "@/components/sections-business/HeroSection";
import { FeaturesSection } from "@/components/sections-business/FeaturesSection";
import { WorkplaceSection } from "@/components/sections-business/WorkplaceSection";
import { IntegrationSection } from "@/components/sections-business/IntegrationSection";
import { TeamSection } from "@/components/sections-business/TeamSection";
import { CarouselSection } from "@/components/sections-business/CarouselSection";
import { WhyMattersSection } from "@/components/sections-business/WhyMattersSection";
import { CTASection } from "@/components/sections-business/CTASection";
import { ContactFormSection } from "@/components/sections-business/ContactFormSection";
import { CompanyInfoSection } from "@/components/sections-business/CompanyInfoSection";
import { DisclaimerSection } from "@/components/DisclaimerSection";

export const metadata = {
  title: "Business Solutions - MindMood",
  description: "MindMood for workplace mental wellness",
};

export default function BusinessPage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="relative text-slate-700 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px_inset] box-border caret-transparent clear-both z-[1]"></div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <HeroSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <FeaturesSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <WorkplaceSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <IntegrationSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <TeamSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <CarouselSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <WhyMattersSection />
        </div>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <CTASection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <ContactFormSection />
        </div>
      </div>
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <DisclaimerSection />
        </div>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <CompanyInfoSection />
        </div>
      </div>
    </div>
  );
}
