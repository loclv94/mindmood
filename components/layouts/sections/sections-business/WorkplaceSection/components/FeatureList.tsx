export type FeatureListProps = {
  variant: string;
  feature1Text: string;
  feature2Text: string;
};

export const FeatureList = (props: FeatureListProps) => {
  return (
    <div className={`clear-both ${props.variant}`}>
      <div className="relative mb-1">
        <div className="absolute text-white bg-black/50 leading-[21px] z-[2] px-2.5 py-px rounded-[3px] left-0.5 bottom-0.5">
          <div className="float-left">
            <span className="text-white text-[13px] leading-[21px] mr-1">
              ✓
            </span>
            {props.feature1Text}
          </div>
        </div>
        <div className="relative bg-gray-100 shadow-[rgba(0,0,0,0.07)_0px_0px_15px_0px_inset] clear-both h-[30px] leading-[30px] w-full overflow-hidden rounded-[3px]">
          <div className="absolute bg-size-[32px_32px] h-full w-full rounded-[3px] left-0 top-0">
            <div className="absolute bg-brand bg-size-[32px_32px] h-full w-full rounded-[3px] left-0 top-0"></div>
          </div>
        </div>
      </div>
      <div className="relative mb-1">
        <div className="absolute text-white bg-black/50 leading-[21px] z-[2] px-2.5 py-px rounded-[3px] left-0.5 bottom-0.5">
          <div className="float-left">
            <span className="text-white text-[13px] leading-[21px] mr-1">
              ✓
            </span>
            {props.feature2Text}
          </div>
        </div>
        <div className="relative bg-gray-100 shadow-[rgba(0,0,0,0.07)_0px_0px_15px_0px_inset] clear-both h-[30px] leading-[30px] w-full overflow-hidden rounded-[3px]">
          <div className="absolute bg-size-[32px_32px] h-full w-full rounded-[3px] left-0 top-0">
            <div className="absolute bg-brand bg-size-[32px_32px] h-full w-full rounded-[3px] left-0 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
