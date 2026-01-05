import { StatisticsGrid } from "./components/StatisticsGrid";

export const WhyMattersSection = () => {
  return (
    <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] py-[50px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="block float-left table-fixed w-full md:table">
            <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] clear-left block min-h-px align-top w-full z-[1] mb-5 p-[3%] rounded-[25px] md:table-cell md:mb-0">
              <section className="box-border caret-transparent">
                <div className="clear-both">
                  <h2 className="text-[26px] font-medium leading-[36.4px] text-center mb-2.5 font-museomoderno">
                    Why It Matters
                  </h2>
                </div>
              </section>
            </div>
          </div>
          <p className="text-neutral-600 text-[15.6px] font-light hidden leading-[24.96px] my-[13.26px] font-museo_sans_rounded"></p>
          <StatisticsGrid />
        </div>
      </div>
    </div>
  );
};
