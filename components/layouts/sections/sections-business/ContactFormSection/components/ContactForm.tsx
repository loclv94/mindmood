export const ContactForm = () => {
  return (
    <form aria-label="Contact Form" className="clear-both mb-5">
      <h3 className="text-[16.9px] leading-[23.66px] mb-2 font-museo_sans_rounded">
        Send us mail
      </h3>
      <fieldset className="mb-5 p-0">
        <p className="relative text-neutral-600 text-[15.6px] font-light clear-both float-none leading-[24.96px] w-full my-[11px] font-museo_sans_rounded md:float-left">
          <label className="relative text-[14.352px] font-bold block mb-[7px]">
            Name{" "}
            <abbr title="required" className="text-brand">
              *
            </abbr>
          </label>
          <input
            name="avia_1_1"
            type="text"
            defaultValue=""
            className="text-neutral-400 text-[18.72px] font-normal leading-[normal] min-w-[50px] w-full border border-slate-200 p-[13px] rounded-sm border-solid bg-white focus:outline-none focus:border-slate-400"
          />
        </p>
        <p className="relative text-neutral-600 text-[15.6px] font-light clear-both float-none leading-[24.96px] w-full my-[11px] font-museo_sans_rounded md:float-left">
          <label className="relative text-[14.352px] font-bold block mb-[7px]">
            E-Mail{" "}
            <abbr
              title="required"
              className="text-brand box-border caret-transparent"
            >
              *
            </abbr>
          </label>
          <input
            name="avia_2_1"
            type="text"
            defaultValue=""
            className="text-neutral-400 text-[18.72px] font-normal leading-[normal] min-w-[50px] w-full border border-slate-200 p-[13px] rounded-sm border-solid bg-white focus:outline-none focus:border-slate-400"
          />
        </p>
        <p className="relative text-neutral-600 text-[15.6px] font-light clear-both float-none leading-[24.96px] w-full my-[11px] font-museo_sans_rounded md:float-left">
          <label className="relative text-[14.352px] font-bold block mb-[7px]">
            Subject{" "}
            <abbr
              title="required"
              className="text-brand box-border caret-transparent"
            >
              *
            </abbr>
          </label>
          <input
            name="avia_3_1"
            type="text"
            defaultValue=""
            className="text-neutral-400 text-[14.04px] font-normal leading-[normal] min-w-[50px] w-full border border-slate-200 p-[13px] rounded-sm border-solid bg-white focus:outline-none focus:border-slate-400"
          />
        </p>
        <p className="relative text-neutral-600 text-[15.6px] font-light clear-both float-none leading-[24.96px] w-full my-[11px] font-museo_sans_rounded md:float-left">
          <label className="relative text-[14.352px] font-bold block mb-[7px] top-0">
            Message{" "}
            <abbr
              title="required"
              className="text-brand box-border caret-transparent"
            >
              *
            </abbr>
          </label>
          <textarea
            name="avia_4_1"
            className="text-neutral-400 text-[18.72px] font-normal leading-[28.08px] min-h-[60px] min-w-[50px] w-full border border-slate-200 p-[13px] rounded-sm border-solid bg-white focus:outline-none focus:border-slate-400"
          ></textarea>
        </p>
        <p className="relative text-neutral-600 text-[15.6px] font-light clear-both float-none leading-[24.96px] w-full my-[11px] font-museo_sans_rounded md:float-left">
          <input
            type="hidden"
            value="1"
            name="avia_generated_form1"
            className="text-black text-[13.3333px] font-normal bg-transparent hidden leading-[normal] p-0 font-arial"
          />
          <input
            type="submit"
            value="Submit"
            className="text-white text-[14.352px] font-semibold bg-brand leading-[normal] min-w-[142px] text-center text-nowrap border-indigo-950 px-5 py-4 rounded-sm border-t-0 border-x-0 border-b font-museomoderno hover:bg-slate-300 hover:border-slate-400"
          />
        </p>
      </fieldset>
    </form>
  );
};
