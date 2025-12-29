export type FeatureListProps = {
  variant: string;
  feature1Text: string;
  feature2Text: string;
};

export const FeatureList = (props: FeatureListProps) => {
  return (
    <div className={`box-border caret-transparent clear-both ${props.variant}`}>
      <div className="relative box-border caret-transparent mb-1">
        <div className="absolute text-white bg-black/50 box-border caret-transparent leading-[21px] z-[2] px-2.5 py-px rounded-[3px] left-0.5 bottom-0.5">
          <div className="box-border caret-transparent float-left mr-[5px]">
            <span className="box-border caret-transparent font-entypo_fontello before:accent-auto before:caret-transparent before:text-white before:text-[13px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello"></span>
          </div>
          <div className="box-border caret-transparent float-left">
            {props.feature1Text}
          </div>
        </div>
        <div className="relative bg-gray-100 shadow-[rgba(0,0,0,0.07)_0px_0px_15px_0px_inset] box-border caret-transparent clear-both h-[30px] leading-[30px] w-full overflow-hidden rounded-[3px]">
          <div className="absolute bg-size-[32px_32px] box-border caret-transparent h-full w-full rounded-[3px] left-0 top-0">
            <div className="absolute bg-slate-700 bg-size-[32px_32px] box-border caret-transparent h-full w-full rounded-[3px] left-0 top-0"></div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent mb-1">
        <div className="absolute text-white bg-black/50 box-border caret-transparent leading-[21px] z-[2] px-2.5 py-px rounded-[3px] left-0.5 bottom-0.5">
          <div className="box-border caret-transparent float-left mr-[5px]">
            <span className="box-border caret-transparent font-entypo_fontello before:accent-auto before:caret-transparent before:text-white before:text-[13px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello"></span>
          </div>
          <div className="box-border caret-transparent float-left">
            {props.feature2Text}
          </div>
        </div>
        <div className="relative bg-gray-100 shadow-[rgba(0,0,0,0.07)_0px_0px_15px_0px_inset] box-border caret-transparent clear-both h-[30px] leading-[30px] w-full overflow-hidden rounded-[3px]">
          <div className="absolute bg-size-[32px_32px] box-border caret-transparent h-full w-full rounded-[3px] left-0 top-0">
            <div className="absolute bg-slate-700 bg-size-[32px_32px] box-border caret-transparent h-full w-full rounded-[3px] left-0 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
