import { Container } from "@/components/Container";
import { GetInTouchButton } from "@/components/GetInTouchButton";

export const CTASection = () => {
  return (
    <Container className="py-12.5">
      <h3 className="text-[16.9px] leading-[23.66px] mb-2 font-museo_sans_rounded">
        Ready to Support Your Team?
      </h3>
      <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
        Every employee deserves access to safe, confidential mental health
        support and every business benefits when their people feel cared for.
      </p>
      <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
        With mindmood, you can provide instant, stigma-free support that’s
        available anytime, anywhere, with the option to connect seamlessly to
        professional care when it’s needed most.
      </p>
      <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
        Let’s build a healthier, more resilient workplace together.
      </p>
      <div className="text-center mt-5">
        <GetInTouchButton />
      </div>
    </Container>
  );
};
