import { Container } from "@/components/layouts/Container";

export const ConfidentialitySection = () => {
  return (
    <Container>
      <div className="py-6 md:py-12.5">
        <p className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] text-center my-[10px] md:my-[13.26px] font-museo_sans_rounded">
          Our commitment to confidentiality ensures that your personal
          information is handled with the utmost care and privacy.
        </p>
        <p className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] text-center my-[10px] md:my-[13.26px] font-museo_sans_rounded">
          Your trust is paramount, and we strive to create a space where you
          feel comfortable expressing yourself openly and honestly.
        </p>
      </div>
    </Container>
  );
};
