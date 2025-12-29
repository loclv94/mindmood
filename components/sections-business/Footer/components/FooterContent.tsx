import { SocialLinks } from "@/components/SocialLinks";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 py-[15px] md:max-w-[1310px] md:w-full md:px-[50px]">
      <span className="box-border caret-transparent clear-both block text-center">
        ©Copyright 2025 MindMood.ai{" "}
      </span>
      <SocialLinks />
    </div>
  );
};
