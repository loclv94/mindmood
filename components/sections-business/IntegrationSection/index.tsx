import { IntegrationButton } from "./components/IntegrationButton";

export const IntegrationSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] mb-2 font-museo_sans_rounded">
                Our support doesn’t stop there
              </h3>
            </div>
          </section>
          <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mt-0 mb-5 md:w-[64.6667%] md:mt-[50px] md:mb-0">
            <section className="box-border caret-transparent">
              <div className="box-border caret-transparent clear-both">
                <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                  When a team member requires more in-depth care, mindmood
                  integrates seamlessly with Wellbeing by PS, providing direct
                  access to licensed mental health professionals. This smooth
                  escalation ensures every individual receives the right level
                  of support, with compassion, privacy, and ease.
                </p>
                <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                  By combining smart, scalable technology with real human
                  connection, mindmood and Wellbeing by PS empower you to create
                  a healthier, more resilient workplace, without placing extra
                  burden on your internal teams.
                </p>
              </div>
            </section>
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px w-full z-[1] ml-0 mt-0 mb-5 md:w-[29.3333%] md:ml-[6%] md:mt-[50px] md:mb-0">
            <div className="relative box-border caret-transparent clear-both max-w-full text-center mx-auto">
              <div className="relative box-border caret-transparent inline-block max-w-full align-bottom mx-auto rounded-[3px]">
                <div className="box-border caret-transparent">
                  <img
                    src="https://c.animaapp.com/mjr478t1erIxQN/assets/3-300x169.png"
                    alt=""
                    title="3"
                    sizes="(max-width: 300px) 100vw, 300px"
                    className="relative aspect-[auto_300_/_169] box-border caret-transparent max-w-full w-[300px] rounded-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent clear-both text-center">
            <IntegrationButton />
          </div>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent hidden leading-[24.96px] my-[13.26px] font-museo_sans_rounded"></p>
        </div>
      </div>
    </div>
  );
};
