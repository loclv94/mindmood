import { ContactSection } from "@/components/sections-home/ContactSection";

import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/Container";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Copyright and company info"
      className="relativetext-[11px] bg-white"
    >
      <ContactSection />

      <hr />

      <Container className="py-[15px] px-4">
        <span className="box-border caret-transparent clear-both block text-center text-slate-700">
          ©Copyright 2025 MindMood.ai{" "}
        </span>
        <SocialLinks />
      </Container>
    </footer>
  );
};
