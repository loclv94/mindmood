import { Logo } from "@/components/Logo";
import { MobileNav } from "./MobileNav";
import { DesktopSocialLinks } from "./DesktopSocialLinks";
import { NavMenu } from "./NavMenu";
import { ScrollProgressBar } from "./ScrollProgressBar";

export const Header = () => {
  return (
    <header
      aria-label="Header"
      role="banner"
      className="relative text-slate-700 box-border caret-transparent w-full z-[501] md:fixed"
    >
      <div className="relative box-border caret-transparent clear-both z-[3] bg-white">
        <div className="relative box-border caret-transparent clear-both h-auto leading-[80px] max-w-[85%] w-[85%] mx-auto px-0 md:h-[118px] md:leading-[118px] md:max-w-[1310px] md:w-full md:px-[50px]">
          <div className="relative box-border caret-transparent h-full leading-[80px] w-full md:leading-[118px]">
            <span className="static box-border caret-transparent table h-20 leading-[80px] transform-none w-4/5 z-[1] overflow-hidden ml-[35px] mt-2.5 left-[0%] md:absolute md:block md:h-full md:leading-[118px] md:translate-x-[-50.0%] md:w-auto md:ml-0 md:mt-0 md:left-2/4">
              <Logo />
            </span>
            <MobileNav />
            <DesktopSocialLinks />
          </div>
        </div>
        <NavMenu />
      </div>

      <ScrollProgressBar />
    </header>
  );
};
