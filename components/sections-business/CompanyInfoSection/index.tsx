export const CompanyInfoSection = () => {
  return (
    <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mb-5 md:mb-0">
      <section className="relative box-border caret-transparent clear-both text-center overflow-hidden my-[30px]">
        <div className="box-border caret-transparent">
          <p className="text-neutral-600 font-light box-border caret-transparent leading-[22.1px] my-[11.05px] font-museo_sans_rounded">
            MindMood.ai
            <br className="box-border caret-transparent" />
            1290 N. Palm Avenue (Bay Plaza Exec Ctr), Suite 108, Sarasota, FL,
            34236, US
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
  );
};
