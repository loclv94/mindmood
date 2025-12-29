import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

export const DesktopSocialLinks = () => {
  return (
    <ul className="absolute box-border caret-transparent hidden h-auto leading-[10.4px] list-none text-center z-[150] ml-0 -mt-4 pl-0 pb-0.5 right-0 top-2/4 md:block md:h-[30px] md:leading-[118px] md:ml-[-9px] md:mt-[-15px] md:text-start md:pb-0">
      <li className="box-border caret-transparent inline-block float-none h-full leading-[10.4px] text-center w-[30px] md:block md:float-left md:leading-[118px] md:text-start">
        <a
          aria-label="Link to Facebook"
          href="https://www.facebook.com/mindmoodai/"
          title="Link to Facebook"
          className="relative text-neutral-400 box-border caret-transparent flex items-center justify-center float-left h-[30px] leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[100px] hover:text-slate-300 transition-colors"
        >
          <FaFacebookF size={18} />
          <span className="sr-only">Link to Facebook</span>
        </a>
      </li>
      <li className="box-border caret-transparent inline-block float-none h-full leading-[10.4px] text-center w-[30px] md:block md:float-left md:leading-[118px] md:text-start">
        <a
          aria-label="Link to X"
          href="https://twitter.com/mindmoodai"
          title="Link to X"
          className="relative text-neutral-400 box-border caret-transparent flex items-center justify-center float-left h-[30px] leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[100px] hover:text-slate-300 transition-colors"
        >
          <FaXTwitter size={18} />
          <span className="sr-only">Link to X</span>
        </a>
      </li>
      <li className="box-border caret-transparent inline-block float-none h-full leading-[10.4px] text-center w-[30px] md:block md:float-left md:leading-[118px] md:text-start">
        <a
          aria-label="Link to Instagram"
          href="https://www.instagram.com/mindmood.com/"
          title="Link to Instagram"
          className="relative text-neutral-400 box-border caret-transparent flex items-center justify-center float-left h-[30px] leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[100px] hover:text-slate-300 transition-colors"
        >
          <FaInstagram size={18} />
          <span className="sr-only">Link to Instagram</span>
        </a>
      </li>
    </ul>
  );
};
