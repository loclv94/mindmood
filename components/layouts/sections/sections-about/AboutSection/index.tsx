import { Container } from "@/components/layouts/Container";

export const AboutSection = () => {
  return (
    <div className="bg-white">
      <Container className="py-4 md:py-5 font-museo_sans_rounded">
        <div className="max-w-[1020px] mx-auto">
          <h1 className="text-[16px] md:text-[19.5px] leading-[22px] md:leading-[27.3px] text-center mb-3 md:mb-3.5 text-brand">
            ABOUT US
          </h1>
          <div className="clear-both">
            <p className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] text-center my-[10px] md:my-[13.26px]">
              At mindmood, we’re driven by a singular mission: to make mental
              health support accessible and affordable for all. Recognizing the
              diminishing stigma surrounding mental health, we’ve observed a
              surge in individuals seeking assistance. However, with growing
              waiting lists and financial constraints, many find themselves
              unable to access the care they need. Moreover, existing online
              support often falls short in catering to diverse identities,
              lacking a sex-positive and LGBTQ+ affirming approach.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
