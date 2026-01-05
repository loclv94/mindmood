import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export const ContactButton = () => {
  return (
    <Link href="/contact" aria-label="CONTACT US">
      <div className="inline-flex font-semibold bg-brand text-white hover:opacity-90 leading-[15.6px] my-[3px] py-3 px-4 rounded-sm border-solid font-museomoderno transition-colors items-center gap-2">
        <FaEnvelope />
        CONTACT US
      </div>
    </Link>
  );
};
