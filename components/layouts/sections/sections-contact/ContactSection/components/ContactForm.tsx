export const ContactForm = () => {
  return (
    <div className="relative ">
      <h3 className="text-[16.9px] leading-[23.66px] mb-2 font-museo_sans_rounded">
        Send a message:
      </h3>

      <form aria-label="Contact form" className="mb-5">
        <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
          <label className="text-[14.352px] font-bold box-border caret-transparent">
            {" "}
            Your name*
            <br className="box-border caret-transparent" />
            <span className="relative text-neutral-700 text-[13px] font-normal box-border caret-transparent">
              <input
                defaultValue=""
                type="text"
                name="your-name"
                className="text-neutral-400 text-[15.6px] block leading-[normal] w-full border border-slate-200 mb-5 px-1.5 py-2 border-solid bg-white"
              />
            </span>
          </label>
        </p>
        <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
          <label className="text-[14.352px] font-bold box-border caret-transparent">
            {" "}
            Your email*
            <br className="box-border caret-transparent" />
            <span className="relative text-neutral-700 text-[13px] font-normal box-border caret-transparent">
              <input
                defaultValue=""
                type="email"
                name="your-email"
                className="text-neutral-400 text-[15.6px] block leading-[normal] w-full border border-slate-200 mb-5 px-1.5 py-2 border-solid bg-white"
              />
            </span>
          </label>
        </p>
        <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
          <label className="text-[14.352px] font-bold box-border caret-transparent">
            {" "}
            Reason for contact*
            <br className="box-border caret-transparent" />
            <span className="relative text-neutral-700 text-[13px] font-normal box-border caret-transparent">
              <select
                name="contact-reason"
                className="text-neutral-400 bg-white bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAANCAYAAAC+ct6XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjBBRUQ1QTQ1QzkxMTFFMDlDNDdEQzgyNUE1RjI4MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjBBRUQ1QTU1QzkxMTFFMDlDNDdEQzgyNUE1RjI4MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMEFFRDVBMjVDOTExMUUwOUM0N0RDODI1QTVGMjgxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMEFFRDVBMzVDOTExMUUwOUM0N0RDODI1QTVGMjgxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk5mU4QAAACUSURBVHjaYmRgYJD6////MwY6AyaGAQIspCieM2cOjKkIxCFA3A0TSElJoZ3FUCANxAeAWA6IOYG4iR5BjWwpCDQCcSnNgxoIVJCDFwnwA/FHWlp8EIpHSKoGgiggLkITewrEcbQO6mVAbAbE+VD+a3IsJTc7FQAxDxD7AbEzEF+jR1DDywtoCr9DbhwzDlRZDRBgACYqHJO9bkklAAAAAElFTkSuQmCC)] bg-no-repeat bg-right block leading-[normal] w-full border border-slate-200 mb-5 px-1.5 py-2 rounded-sm border-solid"
              >
                <option
                  value="Licensing our AI for your site"
                  className="items-center gap-x-[6.5px] min-h-6 min-w-6 gap-y-[6.5px]"
                >
                  Licensing our AI for your site
                </option>
                <option
                  value="Join our therapy referral program"
                  className="items-center gap-x-[6.5px] min-h-6 min-w-6 gap-y-[6.5px]"
                >
                  Join our therapy referral program
                </option>
                <option
                  value="Other"
                  className="items-center gap-x-[6.5px] min-h-6 min-w-6 gap-y-[6.5px]"
                >
                  Other
                </option>
              </select>
            </span>
          </label>
          <label className="text-[14.352px] font-bold box-border caret-transparent">
            <br className="box-border caret-transparent" />
          </label>
          <label className="text-[14.352px] font-bold box-border caret-transparent">
            {" "}
            Additional info. (optional)
            <br className="box-border caret-transparent" />
            <span className="relative text-neutral-700 text-[13px] font-normal box-border caret-transparent">
              <textarea
                name="your-message"
                className="text-neutral-400 text-[15.6px] block leading-[23.4px] min-h-[60px] w-full border border-slate-200 mb-5 px-1.5 py-2 border-solid bg-white"
              ></textarea>
            </span>
          </label>
        </p>
        <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
          <input
            type="submit"
            value="SEND"
            className="text-white text-[13.3333px] font-semibold bg-brand leading-[normal] text-center text-nowrap px-[22px] py-[9px] hover:bg-slate-300 hover:border-slate-400"
          />
        </p>
        <div className="hidden border-cyan-500 mt-[26px] mb-[13px] mx-[6.5px] px-[13px] py-[2.6px] border-2 border-solid"></div>
      </form>
    </div>
  );
};
