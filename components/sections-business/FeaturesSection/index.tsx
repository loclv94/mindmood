import { FeatureCard } from "./components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent block float-left table-fixed w-full md:table">
            <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent clear-left block min-h-px align-top w-full z-[1] mb-5 p-[3%] rounded-[25px] md:table-cell md:mb-0">
              <section className="box-border caret-transparent">
                <div className="box-border caret-transparent clear-both">
                  <h2 className="text-[26px] font-medium box-border caret-transparent leading-[36.4px] text-center mb-2.5 font-museomoderno">
                    Why Businesses Choose AI Support through mindmood
                  </h2>
                </div>
              </section>
            </div>
          </div>
          <div className="box-border caret-transparent block float-left table-fixed w-full mt-[50px] md:table">
            <FeatureCard
              imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_17_06-PM.png"
              imageAlt=""
              title="Support That’s Always There"
              description="Available 24/7 across time zones and languages, mindmood is a safe space employees can turn to anytime, from a quick check-in to a longer late-night conversation."
              variant=""
            />
            <div className="box-border caret-transparent table-cell w-[6%]"></div>
            <FeatureCard
              imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_16_03-PM.png"
              imageAlt=""
              title="More People Reach Out"
              description={
                <>
                  Employees are far more likely to open up to AI first.
                  <br className="box-border caret-transparent" />
                  Research shows people share worries 3x faster with an AI
                  chatbot than with a human therapist.
                  <br className="box-border caret-transparent" />
                  One corporate client saw EAP usage rise from 2% to 20% after
                  integrating AI support.
                </>
              }
              variant=""
            />
            <div className="box-border caret-transparent table-cell w-[6%]"></div>
            <FeatureCard
              imageUrl="https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Jul-29-2025-at-03_16_03-PM.png"
              imageAlt=""
              title="Proven to Improve Wellbeing"
              description={
                <>
                  AI support reduces symptoms of depression and anxiety by{" "}
                  <strong className="text-slate-700 font-bold box-border caret-transparent">
                    31% to 40%
                  </strong>
                  , improving mood, resilience, and productivity.
                </>
              }
              variant=""
            />
          </div>
          <div className="relative box-border caret-transparent clear-both float-left h-[25px] leading-[25px] w-full my-[30px]">
            <span className="absolute box-border caret-transparent block h-px w-full border-slate-200 -mt-px border-t left-0 top-2/4">
              <span className="box-border caret-transparent"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
