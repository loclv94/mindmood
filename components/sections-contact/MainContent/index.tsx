import { PageHeader } from "./components/PageHeader";
import { ContactSection } from "../ContactSection";

export const MainContent = () => {
  return (
    <div className="bg-white box-border caret-transparent pt-0 md:pt-[168px]">
      <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full">
        <PageHeader />
      </div>
      <ContactSection />
      <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both z-[1] border-slate-200 pt-[15px] pb-[30px] border-t">
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
          <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mb-5 md:mb-0">
            <section className="relative box-border caret-transparent clear-both text-center overflow-hidden my-[30px]">
              <div className="box-border caret-transparent">
                <p className="text-neutral-600 font-light box-border caret-transparent leading-[22.1px] my-[11.05px] font-museo_sans_rounded">
                  MindMood.ai
                  <br className="box-border caret-transparent" />
                  1290 N. Palm Avenue (Bay Plaza Exec Ctr), Suite 108, Sarasota,
                  FL, 34236, US
                </p>
                <p className="text-neutral-600 font-light box-border caret-transparent leading-[22.1px] my-[11.05px] font-museo_sans_rounded">
                  <a
                    href="https://mindmood.com/privacy-policy/"
                    className="text-slate-700 box-border caret-transparent max-w-full hover:text-slate-300"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
              <span className="box-border caret-transparent"></span>
            </section>
          </div>
        </div>
      </div>
      <footer
        role="contentinfo"
        aria-label="Copyright and company info"
        className="relative text-slate-700 text-[11px] bg-white box-border caret-transparent clear-both z-[1] border-slate-200 -mt-px border-t"
      >
        <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 py-[15px] md:max-w-[1310px] md:w-full md:px-[50px]">
          <span className="box-border caret-transparent clear-both block text-center">
            ©Copyright 2025 MindMood.ai{" "}
          </span>
          <ul className="relative box-border caret-transparent float-right h-[30px] list-none z-[150] ml-[30px] -mt-2.5 pl-0">
            <li className="relative box-border caret-transparent block float-left h-full w-[30px] overflow-hidden rounded-[300px] top-[5px]">
              <a
                aria-label="Link to Facebook"
                href="https://www.facebook.com/mindmoodai/"
                title="Link to Facebook"
                className="relative box-border caret-transparent block float-left h-full leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[300px] before:accent-auto before:caret-transparent before:text-slate-700 before:text-[11px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello hover:text-slate-300"
              >
                <span className="box-border caret-transparent hidden">
                  Link to Facebook
                </span>
              </a>
            </li>
            <li className="relative box-border caret-transparent block float-left h-full w-[30px] overflow-hidden rounded-[300px] top-[5px]">
              <a
                aria-label="Link to X"
                href="https://twitter.com/mindmoodai"
                title="Link to X"
                className="relative box-border caret-transparent block float-left h-full leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[300px] before:accent-auto before:caret-transparent before:text-slate-700 before:text-[11px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello hover:text-slate-300"
              >
                <span className="box-border caret-transparent hidden">
                  Link to X
                </span>
              </a>
            </li>
            <li className="relative box-border caret-transparent block float-left h-full w-[30px] overflow-hidden rounded-[300px] top-[5px]">
              <a
                aria-label="Link to Instagram"
                href="https://www.instagram.com/mindmood.com/"
                title="Link to Instagram"
                className="relative box-border caret-transparent block float-left h-full leading-[30px] max-w-full min-h-[30px] text-center w-[30px] z-[2] rounded-[300px] before:accent-auto before:caret-transparent before:text-slate-700 before:text-[11px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello hover:text-slate-300"
              >
                <span className="box-border caret-transparent hidden">
                  Link to Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
