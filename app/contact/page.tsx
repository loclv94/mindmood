import { ContactSection } from "@/components/sections-contact/ContactSection";
import { PreFooter } from "@/components/sections-contact/PreFooter";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact Us - MindMood",
  description: "Get in touch with MindMood",
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-0 md:pt-[168px]">
      <div className="text-brand bg-white clear-both float-left w-full mt-2.5">
        <Container>
          <ContactSection />
        </Container>
      </div>
      <PreFooter />
    </div>
  );
}
