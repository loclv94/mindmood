import { SocialLinks } from "@/components/ui/SocialLinks";

export const MobileNav = () => {
  return (
    <nav
      role="navigation"
      className="absolute block h-20 leading-[30px] text-center z-[100] right-0 top-0 md:hidden md:h-full md:top-auto"
    >
      <div className="relative float-left h-full z-[3] border-brand mr-0 pr-0 border-r-0 md:h-auto md:border-slate-300 md:mr-[25px] md:pr-[25px] md:border-r">
        <ul role="menu" className="relative list-none z-[110] pl-0">
          {/* Mobile menu button placeholder */}
        </ul>
      </div>
      <SocialLinks />
    </nav>
  );
};
