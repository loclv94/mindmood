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
    <>
      <HeroSection />

      <FeaturesSection />

      <WorkplaceSection />

      <div className="text-brand bg-gray-100 clear-both float-left min-h-[100px] w-full">
        <Container>
          <IntegrationSection />
        </Container>
      </div>
      <div className="text-brand bg-white clear-both float-left w-full">
        <Container>
          <TeamSection />
        </Container>
      </div>
      <div className="text-brand bg-gray-100 clear-both float-left min-h-[100px] w-full">
        <Container>
          <CarouselSection />
        </Container>
      </div>
      <div className="text-brand bg-white clear-both float-left w-full">
        <Container>
          <WhyMattersSection />
        </Container>
      </div>
      <div className="text-brand bg-white clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
        <Container>
          <CTASection />
        </Container>
      </div>
      <div className="text-brand bg-gray-100 clear-both float-left min-h-[100px] w-full">
        <Container>
          <ContactFormSection />
        </Container>
      </div>
      <div className="relative text-brand bg-white clear-both border-slate-200 border-t">
        <Container>
          <DisclaimerSection />
        </Container>
      </div>
      <div className="text-brand bg-gray-100 clear-both float-left min-h-[100px] w-full">
        <Container>
          <CompanyInfoSection />
        </Container>
      </div>
    </>
  );
}
