import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export const ContactButton = () => {
  return (
    <Link href="/contact" aria-label="CONTACT US">
      <div className="inline-flex font-semibold bg-white leading-[15.6px] border-brand my-[3px] py-3 px-4 border-2 rounded-sm border-solid font-museomoderno hover:bg-brand transition-colors text-brand hover:text-white items-center gap-2">
        <FaEnvelope />
        CONTACT US
      </div>
    </Link>
  );
};
