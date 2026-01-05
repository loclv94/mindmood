import { HeroButton } from "./components/HeroButton";
import { Container } from "@/components/Container";

export const HeroSection = () => {
  return (
    <div className="relative bg-white text-brand py-5 border-b border-gray-200">
      <Container>
        <h2 className="text-[26px] font-medium leading-[36.4px] text-center font-museomoderno">
          A trusted first step for employee wellbeing
        </h2>

        <h3 className="text-[16.9px] leading-[23.66px] text-center mb-2 font-museo_sans_rounded">
          mindmood integrates seamlessly into your workplace systems, giving
          employees instant, stigma-free mental health support whenever they
          need it.
          <br />
          Designed to meet the needs of global teams, it scales effortlessly
          across time zones and languages to provide care that’s always there.
          <br />
          No waiting lists, no appointments, just a safe, human-like space to
          talk, day or night. Meaning more people reach out, more needs are met,
          and organizations see measurable improvements in wellbeing, retention,
          and ROI.
        </h3>

        <div className="clear-both text-center">
          <HeroButton />
        </div>
      </Container>
    </div>
  );
};
