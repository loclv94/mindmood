import { ContactSection } from "@/components/sections-contact/ContactSection";
import { PreFooter } from "@/components/sections-contact/PreFooter";

export const metadata = {
  title: "Contact Us - MindMood",
  description: "Get in touch with MindMood",
};

export default function ContactPage() {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full mt-2.5">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <ContactSection />
        </div>
      </div>
      <PreFooter />
    </div>
  );
}
