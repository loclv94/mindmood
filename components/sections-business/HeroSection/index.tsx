import { HeroButton } from "./components/HeroButton";

export const HeroSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-5">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <h2 className="text-[26px] font-medium box-border caret-transparent leading-[36.4px] text-center mb-2.5 font-museomoderno">
                A trusted first step for employee wellbeing
              </h2>
            </div>
          </section>
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] text-center mb-2 font-museo_sans_rounded">
                mindmood integrates seamlessly into your workplace systems,
                giving employees instant, stigma-free mental health support
                whenever they need it.
                <br className="box-border caret-transparent" />
                Designed to meet the needs of global teams, it scales
                effortlessly across time zones and languages to provide care
                that’s always there.
                <br className="box-border caret-transparent" />
                No waiting lists, no appointments, just a safe, human-like space
                to talk, day or night. Meaning more people reach out, more needs
                are met, and organizations see measurable improvements in
                wellbeing, retention, and ROI.
              </h3>
            </div>
          </section>
          <div className="box-border caret-transparent clear-both text-center">
            <HeroButton />
          </div>
        </div>
      </div>
    </div>
  );
};
