import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";
import { Container } from "@/components/Container";

export const ContactSection = () => {
  return (
    <div className="text-brand bg-gray-100 clear-both float-left min-h-[100px] w-full">
      <Container>
        <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-[50px]">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
