import { SocialLinks } from "@/components/SocialLinks";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Copyright and company info"
      className="relative text-slate-700 text-[11px] bg-white box-border caret-transparent clear-both z-[1] border-slate-200 -mt-px border-t"
    >
      <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 py-[15px] md:max-w-[1310px] md:w-full md:px-[50px]">
        <span className="box-border caret-transparent clear-both block text-center">
          ©Copyright 2025 MindMood.ai{" "}
        </span>
        <SocialLinks
          variant="variant2"
          facebookUrl="https://www.facebook.com/mindmoodai/"
          twitterUrl="https://twitter.com/mindmoodai"
          instagramUrl="https://www.instagram.com/mindmood.com/"
        />
      </div>
    </footer>
  );
};

