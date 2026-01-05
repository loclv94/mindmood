import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";
import { DesktopSocialLinks } from "./DesktopSocialLinks";
import { NavMenu } from "./NavMenu";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Container } from "@/components/layouts/Container";

export const Header = () => {
  return (
    <header
      aria-label="Header"
      role="banner"
      className="relative text-brand w-full z-100 md:sticky top-0 bg-white"
    >
      <Container className="h-auto leading-[80px] md:h-[118px] md:leading-[118px]">
        <div className="relative h-full leading-[80px] w-full md:leading-[118px]">
          <span className="static table h-20 leading-[80px] transform-none w-4/5 z-1 overflow-hidden ml-[35px] mt-2.5 left-[0%] md:absolute md:block md:h-full md:leading-[118px] md:translate-x-[-50.0%] md:w-auto md:ml-0 md:mt-0 md:left-2/4">
            <Logo />
          </span>
          <MobileNav />
          <DesktopSocialLinks />
        </div>
      </Container>
      <NavMenu />

      <ScrollProgressBar />
    </header>
  );
};
