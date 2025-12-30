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
import { Container } from "@/components/Container";

export const metadata = {
  title: "Business Solutions - MindMood",
  description: "MindMood for workplace mental wellness",
};

export default function BusinessPage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="relative text-slate-700 bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px_inset] box-border caret-transparent clear-both z-[1]"></div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
        <Container>
          <HeroSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <FeaturesSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <Container>
          <WorkplaceSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <IntegrationSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <Container>
          <TeamSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <CarouselSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <Container>
          <WhyMattersSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
        <Container>
          <CTASection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <ContactFormSection />
        </Container>
      </div>
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both border-slate-200 border-t">
        <Container>
          <DisclaimerSection />
        </Container>
      </div>
      <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
        <Container>
          <CompanyInfoSection />
        </Container>
      </div>
    </div>
  );
}
