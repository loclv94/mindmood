import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <ul className="relative flex justify-end z-[150] pl-0">
      <li className="box-border caret-transparent h-full w-[30px] ">
        <Link
          href="https://www.facebook.com/mindmoodai/"
          aria-label="Link to Facebook"
          title="Link to Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors"
        >
          <FaFacebookF />
          <span className="sr-only">Link to Facebook</span>
        </Link>
      </li>
      <li className="box-border caret-transparent h-full w-[30px]">
        <Link
          href="https://twitter.com/mindmoodai"
          aria-label="Link to X"
          title="Link to X"
          target="_blank"
          rel="noopener noreferrer"
          className="relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors"
        >
          <FaXTwitter />
          <span className="sr-only">Link to X</span>
        </Link>
      </li>
      <li className="box-border caret-transparent h-full w-[30px]">
        <Link
          href="https://www.instagram.com/mindmood.com/"
          aria-label="Link to Instagram"
          title="Link to Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors"
        >
          <FaInstagram />
          <span className="sr-only">Link to Instagram</span>
        </Link>
      </li>
    </ul>
  );
};
