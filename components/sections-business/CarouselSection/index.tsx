export const CarouselSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="relative box-border caret-transparent clear-both table-fixed text-center w-full overflow-hidden my-[30px]">
            <section className="relative box-border caret-transparent h-[672px] w-full md:h-[264px]"></section>
            <div className="box-border caret-transparent"></div>
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
