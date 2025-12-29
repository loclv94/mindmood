export type DividerProps = Record<string, never>;

export const Divider = (props: DividerProps) => {
  return (
    <div className="relative box-border caret-transparent clear-both float-left h-[25px] leading-[25px] w-full my-[30px]">
      <span className="absolute box-border caret-transparent block h-px w-full border-slate-200 -mt-px border-t left-0 top-2/4">
        <span className="box-border caret-transparent"></span>
      </span>
    </div>
  );
};

