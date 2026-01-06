import { Container } from "@/components/layouts/Container";

export const DisclaimerSection = () => {
  return (
    <Container className="py-12.5">
      <section className="box-border caret-transparent">
        <div className="italic">
          <h3 className="text-[16.9px] leading-[23.66px] font-extrabold text-brand mb-2">
            Disclaimer
          </h3>
          <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px]">
            mindmood is designed as a supportive wellbeing tool and is not a
            substitute for professional medical or clinical care. It is not
            intended to address crises such as abuse, severe mental health
            conditions that may cause thoughts of suicide or self-harm, or any
            other medical emergencies. mindmood cannot and will not provide
            medical advice. In urgent situations, please reach out immediately
            to your country-specific crisis hotline or local emergency services.
          </p>
          <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] ">
            mindmood is available only to users 18 years of age or older.
          </p>
        </div>
      </section>
    </Container>
  );
};
