import { Container } from "@/components/layouts/Container";

export const IntroSection = () => {
  return (
    <div className="text-brand bg-white py-4 md:py-5">
      <Container className="text-center ">
        <h1 className="text-[16px] md:text-[19.5px] leading-[22px] md:leading-[27.3px] text-center mb-3 md:mb-3.5 font-museo_sans_rounded">
          Your Mental Health, Supported Without Judgment.
        </h1>
        <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-center mb-2 font-museo_sans_rounded">
          mindmood is a safe space for every mind. Private, stigma-free, and
          always here.
        </h3>
        <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-center mb-2 font-museo_sans_rounded">
          Whether you need a late-night chat, calming tools, or a gentle guide
          through tough moments.
        </h3>
      </Container>
    </div>
  );
};
