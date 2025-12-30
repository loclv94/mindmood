import { Container } from "@/components/Container";

export const DisclaimerSection = () => {
  return (
    <Container className="py-12.5">
      <section className="box-border caret-transparent">
        <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
          <strong className="text-slate-700 font-bold box-border caret-transparent">
            <em className="italic box-border caret-transparent">Disclaimer</em>
          </strong>
          <br className="box-border caret-transparent" />
          <em className="italic box-border caret-transparent">
            mindmood is designed as a supportive wellbeing tool and is not a
            substitute for professional medical or clinical care. It is not
            intended to address crises such as abuse, severe mental health
            conditions that may cause thoughts of suicide or self-harm, or any
            other medical emergencies. mindmood cannot and will not provide
            medical advice. In urgent situations, please reach out immediately
            to your country-specific crisis hotline or local emergency services.
          </em>
          <br className="box-border caret-transparent" />
          <em className="italic box-border caret-transparent">
            mindmood is available only to users 18 years of age or older.
          </em>
        </p>
      </section>
    </Container>
  );
};
