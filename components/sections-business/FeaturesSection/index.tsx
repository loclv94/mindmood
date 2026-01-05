import { FeatureCard } from "./components/FeatureCard";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";

export const FeaturesSection = () => {
  return (
    <Container className="py-12.5">
      <Card>
        <h2 className="text-[26px] text-brand font-medium leading-[36.4px] text-center font-museomoderno">
          Why Businesses Choose AI Support through mindmood
        </h2>
      </Card>
      <div className="w-full mt-[50px] md:grid md:grid-cols-3 md:gap-18">
        <FeatureCard
          imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_17_06-PM.png"
          imageAlt=""
          title="Support That’s Always There"
          description="Available 24/7 across time zones and languages, mindmood is a safe space employees can turn to anytime, from a quick check-in to a longer late-night conversation."
          variant=""
        />
        <FeatureCard
          imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_16_03-PM.png"
          imageAlt=""
          title="More People Reach Out"
          description={
            <>
              Employees are far more likely to open up to AI first.
              <br className="box-border caret-transparent" />
              Research shows people share worries 3x faster with an AI chatbot
              than with a human therapist.
              <br className="box-border caret-transparent" />
              One corporate client saw EAP usage rise from 2% to 20% after
              integrating AI support.
            </>
          }
          variant=""
        />
        <FeatureCard
          imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_16_03-PM.png"
          imageAlt=""
          title="Proven to Improve Wellbeing"
          description={
            <>
              AI support reduces symptoms of depression and anxiety by{" "}
              <strong className="text-brand font-bold box-border caret-transparent">
                31% to 40%
              </strong>
              , improving mood, resilience, and productivity.
            </>
          }
          variant=""
        />
      </div>

      <Divider />
    </Container>
  );
};
