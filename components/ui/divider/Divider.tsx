export type DividerProps = Record<string, never>;

export const Divider = (props: DividerProps) => {
  return (
    <div className="relative leading-[25px] w-full py-[30px]">
      <div className="h-[25px] leading-[25px] w-full">
        <span className="absolute block h-px w-full border-slate-200 -mt-px border-t left-0 top-2/4" />
      </div>
    </div>
  );
};
