import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/Container";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Copyright and company info"
      className="relative text-slate-700 text-[11px] bg-white box-border caret-transparent clear-both z-[1] border-slate-200 -mt-px border-t"
    >
      <Container className="py-[15px]">
        <span className="box-border caret-transparent clear-both block text-center">
          ©Copyright 2025 MindMood.ai{" "}
        </span>
        <SocialLinks
          variant="variant2"
          facebookUrl="https://www.facebook.com/mindmoodai/"
          twitterUrl="https://twitter.com/mindmoodai"
          instagramUrl="https://www.instagram.com/mindmood.com/"
        />
      </Container>
    </footer>
  );
};

