import { CTAButton } from "./components/CTAButton";

export const CTASection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] mb-2 font-museo_sans_rounded">
                Ready to Support Your Team?
              </h3>
            </div>
          </section>
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                Every employee deserves access to safe, confidential mental
                health support and every business benefits when their people
                feel cared for.
              </p>
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                With mindmood, you can provide instant, stigma-free support
                that’s available anytime, anywhere, with the option to connect
                seamlessly to professional care when it’s needed most.
              </p>
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
                Let’s build a healthier, more resilient workplace together.
              </p>
            </div>
          </section>
          <div className="box-border caret-transparent clear-both text-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
};
