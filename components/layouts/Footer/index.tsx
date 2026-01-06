import { ContactSection } from "@/components/layouts/sections/ContactSection";

import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "@/components/layouts/Container";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Copyright and company info"
      className="relativetext-[11px] bg-white"
    >
      <hr />

      <ContactSection />

      <hr />

      <Container className="py-[15px] px-4">
        <span className="clear-both block text-center text-brand">
          ©Copyright 2025 MindMood.ai{" "}
        </span>
        <SocialLinks />
      </Container>
    </footer>
  );
};
