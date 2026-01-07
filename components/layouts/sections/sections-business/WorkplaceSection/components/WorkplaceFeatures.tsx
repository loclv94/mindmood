import { FeatureList } from "./FeatureList";

export const WorkplaceFeatures = () => {
  return (
    <div className="">
      <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
        FOR THE LONG TERM:
      </h3>

      <FeatureList
        variant="my-[15px]"
        feature1Text="UNLIMITED NUMBER OF MESSAGES"
        feature2Text="USE FOR LARGE PERIODS OF TIME"
      />

      <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
        INTELLIGENT:
      </h3>

      <FeatureList
        variant="my-[15px]"
        feature1Text="USES OUR EXTENSIVE, INFORMED MENTAL HEALTH TRAINING DOCS"
        feature2Text="MULTIPLE SOTA HIGH PARAMETER LLM AGENTS WORKING TOGETHER"
      />

      <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
        REALISTIC:
      </h3>

      <FeatureList
        variant="my-[15px]"
        feature1Text="VOICE TO VOICE COMMUNICATION"
        feature2Text="KIND AND NATURAL RESPONSE AND TONE"
      />

      <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
        BUILT IN ESCALATION:
      </h3>

      <FeatureList
        variant="mt-[15px]"
        feature1Text="PROVIDES CRISIS RESOURCES WHEN NECESSARY"
        feature2Text="DIRECTS TO A LICENSED MENTAL HEALTH PRACTITIONER "
      />
    </div>
  );
};
