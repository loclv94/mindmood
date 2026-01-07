import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";
import { Container } from "@/components/layouts/Container";

export const ContactSection = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-6 md:py-10">
      <ContactInfo />
      <ContactForm />
    </Container>
  );
};
