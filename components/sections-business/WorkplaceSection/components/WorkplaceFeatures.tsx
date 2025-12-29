import { FeatureList } from "./FeatureList";

export const WorkplaceFeatures = () => {
  return (
    <div className="relative box-border caret-transparent float-left min-h-px w-full z-[1] ml-0 mt-0 mb-5 md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
            FOR THE LONG TERM:
          </h3>
        </div>
      </section>
      <FeatureList
        variant="my-[15px]"
        feature1Text="UNLIMITED NUMBER OF MESSAGES"
        feature2Text="USE FOR LARGE PERIODS OF TIME"
      />
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
            INTELLIGENT:
          </h3>
        </div>
      </section>
      <FeatureList
        variant="my-[15px]"
        feature1Text="USES OUR EXTENSIVE, INFORMED MENTAL HEALTH TRAINING DOCS"
        feature2Text="MULTIPLE SOTA HIGH PARAMETER LLM AGENTS WORKING TOGETHER"
      />
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
            REALISTIC:
          </h3>
        </div>
      </section>
      <FeatureList
        variant="my-[15px]"
        feature1Text="VOICE TO VOICE COMMUNICATION"
        feature2Text="KIND AND NATURAL RESPONSE AND TONE"
      />
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
            BUILT IN ESCALATION:
          </h3>
        </div>
      </section>
      <FeatureList
        variant="mt-[15px]"
        feature1Text="PROVIDES CRISIS RESOURCES WHEN NECESSARY"
        feature2Text="DIRECTS TO A LICENSED MENTAL HEALTH PRACTITIONER "
      />
    </div>
  );
};
