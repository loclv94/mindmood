import { SocialLinks } from "@/components/SocialLinks";

export const MobileNav = () => {
  return (
    <nav
      role="navigation"
      className="absolute box-border caret-transparent block h-20 leading-[30px] text-center z-[100] right-0 top-0 md:hidden md:h-full md:top-auto"
    >
      <div className="relative box-border caret-transparent float-left h-full z-[3] border-slate-700 mr-0 pr-0 border-r-0 md:h-auto md:border-slate-300 md:mr-[25px] md:pr-[25px] md:border-r">
        <ul
          role="menu"
          className="relative box-border caret-transparent list-none z-[110] pl-0"
        >
          {/* Mobile menu button placeholder */}
        </ul>
      </div>
      <SocialLinks
        variant="variant1"
        facebookUrl="https://www.facebook.com/mindmoodai/"
        twitterUrl="https://twitter.com/mindmoodai"
        instagramUrl="https://www.instagram.com/mindmood.com/"
      />
    </nav>
  );
};

