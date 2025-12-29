import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="mindmood-logo@340×156"
      title="mindmood-logo@340×156"
      className="relative box-border caret-transparent table-cell h-full leading-[80px] max-w-full align-middle overflow-hidden ml-[35px] mt-2.5 md:block md:leading-[118px] md:align-baseline md:ml-0 md:mt-0 hover:text-slate-300"
    >
      <img
        src="https://c.animaapp.com/mjr46i29PMq8a8/assets/icon-1.svg"
        alt="MindMood Logo"
        className="relative box-border caret-transparent h-auto leading-[80px] z-[2] md:h-full md:leading-[118px]"
      />
    </Link>
  );
};

