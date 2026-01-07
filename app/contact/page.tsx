import { ContactSection } from "@/components/layouts/sections/sections-contact/ContactSection";

export const metadata = {
  title: "Contact Us - MindMood",
  description: "Get in touch with MindMood",
};

export default function ContactPage() {
  return (
    <>
      <div className="text-brand text-center text-[20px] md:text-[26px] font-medium leading-[28px] md:leading-[36.4px] py-4 md:py-5 bg-white w-full">
        CONTACT
      </div>

      <ContactSection />
    </>
  );
}
