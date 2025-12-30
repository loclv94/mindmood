import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const CTASection = () => {
  return (
    <div className="bg-white">
      <Container className="py-5 px-12.5">
        <Card>
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_50_35-PM.png"
                  alt=""
                  sizes="auto, (max-width: 350px) 100vw, 350px"
                  className="relative aspect-[auto_350_/_233] box-border caret-transparent clear-both max-w-full w-[350px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <h2 className="text-[26px] text-slate-700 font-medium box-border caret-transparent leading-[36.4px] text-center mb-2.5 font-museomoderno">
                Join us on this transformative journey towards better mental
                health, where you are free to be yourself, explore your
                emotions, and receive support in a positive, confidential, and
                friendly setting.
              </h2>
            </div>
          </section>
          <div className="box-border caret-transparent clear-both text-center">
            <a
              href="https://mindmood.com/dev/contact-form/?iframe=true"
              aria-label="GET IN TOUCH"
              className="relative font-semibold bg-white box-border caret-transparent inline-block leading-[15.6px] max-w-full min-w-[90px] border-slate-700 my-[3px] pt-3 pb-2.5 px-4 border-2 border-solid font-museomoderno hover:text-white hover:bg-slate-700"
            >
              <span className="relative box-border caret-transparent left-[-3.9px] z-[3] font-entypo_fontello before:accent-auto before:caret-transparent before:text-slate-700 before:text-[13px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[15.6px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello"></span>
              <span className="relative box-border caret-transparent z-[3]">
                GET IN TOUCH
              </span>
            </a>
          </div>
        </Card>
      </Container>
    </div>
  );
};
