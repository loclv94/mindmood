import { ContactSection } from "@/components/sections-contact/ContactSection";
import { PreFooter } from "@/components/sections-contact/PreFooter";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Contact Us - MindMood",
  description: "Get in touch with MindMood",
};

export default function ContactPage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
        <Container>
          <ContactSection />
        </Container>
      </div>
      <PreFooter />
    </div>
  );
}
