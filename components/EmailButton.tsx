export const EmailButton = () => {
  return (
    <div className="box-border caret-transparent inline-block">
      <a
        href="mailto://support@mindmood.com"
        aria-label="E-MAIL US"
        className="relative font-semibold bg-white box-border caret-transparent block float-left leading-[15.6px] max-w-full min-w-[90px] text-center border-slate-700 my-[3px] pt-3 pb-2.5 px-4 border-2 border-solid font-museomoderno hover:text-white hover:bg-slate-700"
      >
        <span className="relative box-border caret-transparent left-[-3.9px] z-[3] font-entypo_fontello before:accent-auto before:caret-transparent before:text-slate-700 before:text-[13px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[15.6px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-entypo_fontello"></span>
        <span className="relative box-border caret-transparent z-[3]">
          E-MAIL US
        </span>
      </a>
    </div>
  );
};
