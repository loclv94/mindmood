import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export const ContactButton = () => {
  return (
    <Link
      href="/contact"
      aria-label="CONTACT US"
      className="group relative font-semibold bg-white box-border caret-transparent inline-block leading-[15.6px] max-w-full min-w-[90px] border-brand my-[3px] pt-3 pb-2.5 px-4 border-2 border-solid font-museomoderno hover:bg-brand transition-colors"
    >
      <span className="relative box-border caret-transparent z-3 text-brand group-hover:text-white flex items-center gap-2 transition-colors">
        <FaEnvelope />
        CONTACT US
      </span>
    </Link>
  );
};
