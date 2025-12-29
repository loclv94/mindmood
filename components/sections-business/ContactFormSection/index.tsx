import { ContactForm } from "./components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <ContactForm />
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent hidden leading-[24.96px] my-[13.26px] font-museo_sans_rounded"></p>
          <div className="relative box-border caret-transparent clear-both float-left h-[25px] leading-[25px] w-full my-[30px]">
            <span className="absolute box-border caret-transparent block h-px w-full border-slate-200 -mt-px border-t left-0 top-2/4">
              <span className="box-border caret-transparent"></span>
            </span>
          </div>
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <strong className="text-slate-700 font-bold box-border caret-transparent">
                  <em className="italic box-border caret-transparent">
                    Disclaimer
                  </em>
                </strong>
                <br className="box-border caret-transparent" />
                <em className="italic box-border caret-transparent">
                  mindmood is designed as a supportive wellbeing tool and is not
                  a substitute for professional medical or clinical care. It is
                  not intended to address crises such as abuse, severe mental
                  health conditions that may cause thoughts of suicide or
                  self-harm, or any other medical emergencies. mindmood cannot
                  and will not provide medical advice. In urgent situations,
                  please reach out immediately to your country-specific crisis
                  hotline or local emergency services.
                </em>
                <br className="box-border caret-transparent" />
                <em className="italic box-border caret-transparent">
                  mindmood is available only to users 18 years of age or older.
                </em>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
