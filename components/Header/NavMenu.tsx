import Link from "next/link";

export const NavMenu = () => {
  return (
    <nav
      role="navigation"
      className="absolute box-border caret-transparent clear-both float-none h-20 leading-10 text-center w-full bg-gray-100 z-[100] right-0 top-0 md:relative md:float-left md:h-full md:top-auto"
    >
      <div className="relative box-border caret-transparent float-left h-[50px] w-full z-[3]">
        <ul
          role="menu"
          className="box-border caret-transparent inline-block h-[50px] list-none z-[110] pl-0"
        >
          <li
            role="menuitem"
            className="relative box-border caret-transparent hidden float-left leading-[30px] z-20 md:list-item"
          >
            <Link
              href="/"
              className="font-semibold bg-transparent box-border caret-transparent block h-[50px] leading-[50px] px-[13px] font-museo_sans_rounded md:bg-gray-100 hover:text-slate-400"
            >
              <span className="absolute border-l-slate-700 border-r-slate-700 box-border caret-transparent hidden h-0 left-[-3px] mt-[-3px] w-0 border-l-[3px] border-y-transparent border-y-[3px] top-[51%]"></span>
              <span className="box-border caret-transparent ml-[-13px] pl-[13px]">
                HOME
              </span>
            </Link>
          </li>
          <li
            role="menuitem"
            className="relative box-border caret-transparent hidden float-left leading-[30px] z-20 md:list-item"
          >
            <Link
              href="/about-us"
              className="font-semibold bg-transparent box-border caret-transparent block h-[50px] leading-[50px] px-[13px] font-museo_sans_rounded md:bg-gray-100 hover:text-slate-400"
            >
              <span className="absolute border-l-slate-700 border-r-slate-700 box-border caret-transparent hidden h-0 left-[-3px] mt-[-3px] w-0 border-l-[3px] border-y-transparent border-y-[3px] top-[51%]"></span>
              <span className="box-border caret-transparent ml-[-13px] border-slate-300 pl-[13px] border-l">
                ABOUT US
              </span>
            </Link>
          </li>
          <li
            role="menuitem"
            className="relative box-border caret-transparent hidden float-left leading-[30px] z-20 md:list-item"
          >
            <Link
              href="/business"
              className="font-semibold bg-transparent box-border caret-transparent block h-[50px] leading-[50px] px-[13px] font-museo_sans_rounded md:bg-gray-100 hover:text-slate-400"
            >
              <span className="absolute border-l-slate-700 border-r-slate-700 box-border caret-transparent hidden h-0 left-[-3px] mt-[-3px] w-0 border-l-[3px] border-y-transparent border-y-[3px] top-[51%]"></span>
              <span className="box-border caret-transparent ml-[-13px] border-slate-300 pl-[13px] border-l">
                BUSINESS
              </span>
            </Link>
          </li>
          <li
            role="menuitem"
            className="relative box-border caret-transparent hidden float-left leading-[30px] z-20 md:list-item"
          >
            <Link
              href="/contact"
              className="font-semibold bg-transparent box-border caret-transparent block h-[50px] leading-[50px] px-[13px] font-museo_sans_rounded md:bg-gray-100 hover:text-slate-400"
            >
              <span className="absolute border-l-slate-700 border-r-slate-700 box-border caret-transparent hidden h-0 left-[-3px] mt-[-3px] w-0 border-l-[3px] border-y-transparent border-y-[3px] top-[51%]"></span>
              <span className="box-border caret-transparent ml-[-13px] border-slate-300 pl-[13px] border-l">
                CONTACT
              </span>
            </Link>
          </li>
          <li
            role="menuitem"
            className="relative box-border caret-transparent block float-left leading-[30px] z-20 md:hidden"
          >
            <a
              href="#"
              aria-label="Menu"
              className="font-semibold bg-transparent box-border caret-transparent block h-[50px] leading-[50px] px-[13px] font-museo_sans_rounded md:bg-gray-100 hover:text-slate-400"
            >
              <span className="box-border caret-transparent inline-block">
                <span className="relative box-border caret-transparent inline-block h-2 w-[35px]">
                  <span className="absolute bg-neutral-400 box-border caret-transparent block h-[3px] w-full -mt-0.5 rounded-[3px] top-2/4 before:accent-auto before:bg-neutral-400 before:caret-transparent before:text-slate-700 before:block before:text-[13px] before:not-italic before:normal-nums before:font-semibold before:h-[3px] before:tracking-[normal] before:leading-[50px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:rounded-[3px] before:border-separate before:-top-2.5 before:font-museo_sans_rounded after:accent-auto after:bg-neutral-400 after:caret-transparent after:text-slate-700 after:block after:text-[13px] after:not-italic after:normal-nums after:font-semibold after:h-[3px] after:tracking-[normal] after:leading-[50px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:rounded-[3px] after:border-separate after:-bottom-2.5 after:font-museo_sans_rounded"></span>
                  <strong className="font-bold box-border caret-transparent hidden">
                    Menu
                  </strong>
                </span>
              </span>
              <span className="box-border caret-transparent hidden">Menu</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
