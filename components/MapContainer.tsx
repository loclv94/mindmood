export const MapContainer = () => {
  return (
    <div className="box-border caret-transparent pr-[5%] pt-[5%]">
      <div className="relative bg-no-repeat bg-cover box-border caret-transparent clear-both h-[400px] overflow-hidden bg-center">
        <div className="absolute caret-transparent h-full w-full left-0 top-0">
          <div className="caret-transparent">
            <button
              aria-label="Keyboard shortcuts"
              title="Keyboard shortcuts"
              type="button"
              className="absolute text-black text-[13.3333px] bg-transparent caret-transparent block leading-[normal] outline-offset-[3px] text-center z-[1000002] p-0 right-0 bottom-0 font-arial"
            ></button>
          </div>
          <div
            aria-label="Map"
            role="region"
            className="absolute caret-transparent h-full w-full left-0 top-0"
          >
            <div className="caret-transparent hidden">
              <div className="caret-transparent flex">
                <table className="bg-gray-100 caret-transparent w-full border-collapse">
                  <tbody className="bg-gray-100 box-border caret-transparent">
                    <tr className="bg-gray-100 box-border caret-transparent">
                      <td className="text-black bg-gray-100 box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l border-t">
                        <kbd
                          aria-label="Left arrow"
                          className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text"
                        >
                          ←
                        </kbd>
                      </td>
                      <td
                        aria-label="Move left."
                        className="text-black bg-gray-100 box-border caret-transparent text-nowrap align-middle border-slate-200 p-1.5 border-t"
                      >
                        Move left
                      </td>
                    </tr>
                    <tr className="text-neutral-400 bg-white box-border caret-transparent">
                      <td className="text-black bg-white box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd
                          aria-label="Right arrow"
                          className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text"
                        >
                          →
                        </kbd>
                      </td>
                      <td
                        aria-label="Move right."
                        className="text-black bg-white box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Move right
                      </td>
                    </tr>
                    <tr className="bg-gray-100 box-border caret-transparent">
                      <td className="text-black bg-gray-100 box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd
                          aria-label="Up arrow"
                          className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text"
                        >
                          ↑
                        </kbd>
                      </td>
                      <td
                        aria-label="Move up."
                        className="text-black bg-gray-100 box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Move up
                      </td>
                    </tr>
                    <tr className="text-neutral-400 bg-white box-border caret-transparent">
                      <td className="text-black bg-white box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd
                          aria-label="Down arrow"
                          className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text"
                        >
                          ↓
                        </kbd>
                      </td>
                      <td
                        aria-label="Move down."
                        className="text-black bg-white box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Move down
                      </td>
                    </tr>
                    <tr className="bg-gray-100 box-border caret-transparent">
                      <td className="text-black bg-gray-100 box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          +
                        </kbd>
                      </td>
                      <td
                        aria-label="Zoom in."
                        className="text-black bg-gray-100 box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Zoom in
                      </td>
                    </tr>
                    <tr className="text-neutral-400 bg-white box-border caret-transparent">
                      <td className="text-black bg-white box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          -
                        </kbd>
                      </td>
                      <td
                        aria-label="Zoom out."
                        className="text-black bg-white box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Zoom out
                      </td>
                    </tr>
                    <tr className="bg-gray-100 box-border caret-transparent">
                      <td className="text-black bg-gray-100 box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          Home
                        </kbd>
                      </td>
                      <td
                        aria-label="Jump left by 75%."
                        className="text-black bg-gray-100 box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Jump left by 75%
                      </td>
                    </tr>
                    <tr className="text-neutral-400 bg-white box-border caret-transparent">
                      <td className="text-black bg-white box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          End
                        </kbd>
                      </td>
                      <td
                        aria-label="Jump right by 75%."
                        className="text-black bg-white box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Jump right by 75%
                      </td>
                    </tr>
                    <tr className="bg-gray-100 box-border caret-transparent">
                      <td className="text-black bg-gray-100 box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          Page Up
                        </kbd>
                      </td>
                      <td
                        aria-label="Jump up by 75%."
                        className="text-black bg-gray-100 box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Jump up by 75%
                      </td>
                    </tr>
                    <tr className="text-neutral-400 bg-white box-border caret-transparent">
                      <td className="text-black bg-white box-border caret-transparent text-end text-nowrap align-middle border-slate-200 p-1.5 border-l">
                        <kbd className="relative bg-gray-200 box-border caret-transparent inline-block leading-4 min-h-5 min-w-5 text-center text-nowrap mx-0.5 px-1 py-0.5 rounded-sm font-google_sans_text">
                          Page Down
                        </kbd>
                      </td>
                      <td
                        aria-label="Jump down by 75%."
                        className="text-black bg-white box-border caret-transparent text-nowrap align-middle p-1.5"
                      >
                        Jump down by 75%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="absolute text-[11px] caret-transparent h-full leading-[normal] w-full z-0 left-0 top-0 font-roboto">
            <div className="absolute caret-transparent h-full w-full z-0 left-0 top-0">
              <div className="absolute caret-transparent w-full z-[1] left-2/4 top-2/4">
                <div className="absolute caret-transparent w-full z-[100] left-0 top-0">
                  <div className="absolute caret-transparent z-0 left-0 top-0">
                    <div className="absolute caret-transparent translate-x-[-52px] translate-y-[-110px] z-[984]">
                      <div className="absolute caret-transparent h-64 w-64 left-0 top-0">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 -left-64 top-0">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 -left-64 -top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 left-0 -top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 left-0 top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 -left-64 top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 left-64 -top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 left-64 top-0">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                      <div className="absolute caret-transparent h-64 w-64 left-64 top-64">
                        <div className="caret-transparent h-64 w-64"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute caret-transparent w-full z-[101] left-0 top-0"></div>
                <div className="absolute caret-transparent w-full z-[102] left-0 top-0"></div>
                <div className="absolute caret-transparent w-full z-[103] left-0 top-0">
                  <div className="absolute caret-transparent z-[-1] left-0 top-0">
                    <div className="absolute caret-transparent translate-x-[-52px] translate-y-[-110px] z-[984]">
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-0 top-0"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden -left-64 top-0"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden -left-64 -top-64"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-0 -top-64"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-0 top-64"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden -left-64 top-64"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-64 -top-64"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-64 top-0"></div>
                      <div className="absolute caret-transparent h-64 w-64 overflow-hidden left-64 top-64"></div>
                    </div>
                  </div>
                  <div className="absolute caret-transparent h-[37px] left-[-13px] top-[-37px] w-[26px] z-0 overflow-hidden">
                    <img
                      alt=""
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/spotlight-poi3.png"
                      className="absolute caret-transparent h-[37px] w-[26px] left-0 top-0"
                    />
                  </div>
                </div>
                <div className="absolute caret-transparent z-0 left-0 top-0">
                  <div className="absolute caret-transparent translate-x-[-52px] translate-y-[-110px] z-[984]">
                    <div className="absolute caret-transparent h-64 w-64 -left-64 top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 -left-64 -top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-0 -top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-0 top-0">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 -left-64 top-0">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-0 top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-64 -top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-64 top-0">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                    <div className="absolute caret-transparent h-64 w-64 left-64 top-64">
                      <img
                        alt=""
                        role="presentation"
                        className="caret-transparent inline-block h-64 w-64"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute caret-transparent h-full w-full z-[3] left-0 top-0">
                <div className="absolute caret-transparent w-full z-[4] left-2/4 top-2/4">
                  <div className="absolute caret-transparent w-full z-[104] left-0 top-0"></div>
                  <div className="absolute caret-transparent w-full z-[105] left-0 top-0"></div>
                  <div className="absolute caret-transparent w-full z-[106] left-0 top-0">
                    <div className="box-border caret-transparent contents"></div>
                    <span className="absolute box-border caret-transparent block h-px text-nowrap w-px overflow-hidden -m-px"></span>
                    <div
                      aria-label="1290 N. Palm Avenue"
                      role="img"
                      className="absolute caret-transparent h-[37px] left-[-13px] top-[-37px] w-[26px] z-0 overflow-hidden"
                    >
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/transparent.png"
                        className="caret-transparent inline-block h-[37px] w-[26px]"
                      />
                      <map
                        name="gmimap0"
                        className="box-border caret-transparent"
                      >
                        <area
                          title="1290 N. Palm Avenue"
                          className="absolute box-border caret-transparent block left-0 top-0"
                        />
                      </map>
                    </div>
                  </div>
                  <div className="absolute caret-transparent w-full z-[107] left-0 top-0"></div>
                </div>
              </div>
            </div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent">
              <button
                aria-label="Toggle fullscreen view"
                title="Toggle fullscreen view"
                type="button"
                className="absolute text-black text-[13.3333px] bg-white shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] caret-transparent block h-10 text-center w-10 overflow-hidden m-2.5 p-0 rounded-sm right-0 top-0 font-arial"
              >
                <img
                  src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-1.svg"
                  alt=""
                  className="absolute caret-transparent h-[18px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[18px] left-2/4 top-2/4"
                />
                <img
                  src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-2.svg"
                  alt=""
                  className="absolute caret-transparent hidden h-[18px] pointer-events-none w-[18px] left-2/4 top-2/4"
                />
                <img
                  src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-3.svg"
                  alt=""
                  className="absolute caret-transparent hidden h-[18px] pointer-events-none w-[18px] left-2/4 top-2/4"
                />
              </button>
            </div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent">
              <div className="absolute caret-transparent m-2.5 right-10 bottom-[239px]">
                <div className="static caret-black block md:absolute md:aspect-auto md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="bg-transparent shadow-none caret-black h-auto w-auto rounded-none md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">
                    <button
                      aria-label="Rotate map clockwise"
                      title="Rotate map clockwise"
                      type="button"
                      className="static text-black text-[13.3333px] bg-zinc-100 caret-black inline-block h-auto text-center w-auto left-auto top-auto font-arial md:relative md:appearance-none md:aspect-auto md:bg-transparent md:caret-transparent md:hidden md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                    >
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-4.svg"
                        className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-5.svg"
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-6.svg"
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                    </button>
                    <div className="static bg-transparent caret-black block h-auto w-auto mx-0 md:relative md:aspect-auto md:bg-neutral-200 md:caret-transparent md:hidden md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mx-[5px] md:scroll-m-0 md:scroll-p-[auto]"></div>
                    <button
                      aria-label="Rotate map counterclockwise"
                      title="Rotate map counterclockwise"
                      type="button"
                      className="static text-black text-[13.3333px] bg-zinc-100 caret-black inline-block h-auto text-center w-auto left-auto top-auto font-arial md:relative md:appearance-none md:aspect-auto md:bg-transparent md:caret-transparent md:hidden md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                    >
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-4.svg"
                        className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-5.svg"
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-6.svg"
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                    </button>
                    <div className="static bg-transparent caret-black block h-auto w-auto mx-0 md:relative md:aspect-auto md:bg-neutral-200 md:caret-transparent md:hidden md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mx-[5px] md:scroll-m-0 md:scroll-p-[auto]"></div>
                    <button
                      aria-label="Tilt map"
                      title="Tilt map"
                      type="button"
                      className="static text-black text-[13.3333px] bg-zinc-100 caret-black inline-block h-auto text-center w-auto left-auto top-auto font-arial md:relative md:appearance-none md:aspect-auto md:bg-transparent md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                    >
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-7.svg"
                        className="static caret-black pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[18px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-8.svg"
                        className="static caret-black block pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[18px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        alt=""
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-9.svg"
                        className="static caret-black block pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[18px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                    </button>
                  </div>
                </div>
                <div className="md:absolute md:aspect-auto md:box-border md:caret-transparent md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                  <button
                    aria-label="Map camera controls"
                    title="Map camera controls"
                    type="button"
                    className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none font-arial md:relative md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                  >
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-10.svg"
                      alt=""
                      className="static caret-black h-auto pointer-events-auto transform-none align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                    />
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-10.svg"
                      alt=""
                      className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                    />
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-11.svg"
                      alt=""
                      className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                    />
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-12.svg"
                      alt=""
                      className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                    />
                  </button>
                  <menu className="static box-content caret-black block h-auto list-disc w-auto z-auto pl-10 right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-[140px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-60px] md:w-[140px] md:z-[999999] md:[mask-position:0%] md:bg-left-top md:m-2.5 md:pl-0 md:scroll-m-0 md:scroll-p-[auto] md:right-full">
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Move up"
                        title="Move up"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none left-auto top-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:left-2/4 md:top-0"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-13.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-14.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-13.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-15.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Move left"
                        title="Move left"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none left-auto bottom-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:left-0 md:bottom-2/4"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-16.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-17.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-16.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-18.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Move right"
                        title="Move right"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none right-auto bottom-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:right-0 md:bottom-2/4"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-19.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-20.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-19.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-21.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Move down"
                        title="Move down"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none left-auto bottom-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:left-2/4 md:bottom-0"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-22.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-23.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-22.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-22.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Zoom in"
                        title="Zoom in"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none right-auto top-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:right-0 md:top-0"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-24.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-25.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-26.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-27.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                    <li className="box-content caret-black ml-0 py-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[11px] md:py-[3px] md:scroll-m-0 md:scroll-p-[auto]">
                      <button
                        aria-label="Zoom out"
                        title="Zoom out"
                        type="button"
                        className="static text-black text-[13.3333px] bg-zinc-100 bg-repeat bg-auto shadow-none caret-black inline-block h-auto text-center w-auto rounded-none right-auto bottom-auto font-arial md:absolute md:appearance-none md:aspect-auto md:bg-white md:bg-no-repeat md:bg-size-[28px] md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-[position:6px_50%] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:right-0 md:bottom-0"
                      >
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-28.svg"
                          alt=""
                          className="static caret-black h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-29.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-30.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                        <img
                          src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-31.svg"
                          alt=""
                          className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                        />
                      </button>
                    </li>
                  </menu>
                </div>
                <button
                  aria-label="Drag Pegman onto the map to open Street View"
                  title="Drag Pegman onto the map to open Street View"
                  type="button"
                  className="absolute text-black text-[13.3333px] bg-white shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] caret-transparent block h-10 text-center w-10 p-0 rounded-sm left-0 top-[72px] font-arial"
                >
                  <div className="absolute caret-transparent left-2/4 top-2/4">
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-32.svg"
                      alt="Street View Pegman Control"
                      className="absolute caret-transparent h-[30px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[30px]"
                    />
                    <img
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-33.svg"
                      alt="Pegman is on top of the Map"
                      className="absolute caret-transparent hidden h-[30px] pointer-events-none w-[30px]"
                    />
                    <img
                      alt="Street View Pegman Control"
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-34.svg"
                      className="absolute caret-transparent hidden h-10 pointer-events-none w-10"
                    />
                  </div>
                </button>
                <div className="static caret-black left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-36">
                  <div className="bg-transparent shadow-none caret-black h-auto w-auto rounded-none md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] md:caret-transparent md:h-[81px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">
                    <button
                      aria-label="Zoom in"
                      title="Zoom in"
                      type="button"
                      className="static text-black text-[13.3333px] bg-zinc-100 caret-black inline-block h-auto text-center w-auto left-auto top-auto font-arial md:relative md:appearance-none md:aspect-auto md:bg-white md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                    >
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-24.svg"
                        alt=""
                        className="static caret-black h-auto pointer-events-auto transform-none align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-25.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-26.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-27.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                    </button>
                    <div className="static bg-transparent caret-black h-auto w-auto mx-0 top-auto md:relative md:aspect-auto md:bg-neutral-200 md:caret-transparent md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mx-[5px] md:scroll-m-0 md:scroll-p-[auto] md:top-0"></div>
                    <button
                      aria-label="Zoom out"
                      title="Zoom out"
                      type="button"
                      className="static text-black text-[13.3333px] bg-zinc-100 caret-black inline-block h-auto text-center w-auto left-auto top-auto font-arial md:relative md:appearance-none md:aspect-auto md:bg-white md:caret-transparent md:block md:h-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0"
                    >
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-28.svg"
                        alt=""
                        className="static caret-black h-auto pointer-events-auto transform-none align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-29.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-30.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                      <img
                        src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-31.svg"
                        alt=""
                        className="static caret-black block h-auto pointer-events-auto align-middle w-auto left-auto top-auto md:absolute md:aspect-auto md:caret-transparent md:hidden md:h-7 md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-7 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2/4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="caret-transparent">
              <div className="absolute caret-transparent z-[1000000] mx-[5px] left-0 bottom-0">
                <a
                  title="Open this area in Google Maps (opens a new window)"
                  aria-label="Open this area in Google Maps (opens a new window)"
                  href="https://maps.google.com/maps?ll=27.335521,-82.54466&z=16&t=m&hl=en-US&gl=US&mapclient=apiv3"
                  className="caret-transparent max-w-full hover:text-slate-300"
                >
                  <div className="caret-transparent h-[26px] w-[66px]">
                    <img
                      alt="Google"
                      src="https://c.animaapp.com/mjr4a3k8T2VHa7/assets/image-35.svg"
                      className="absolute caret-transparent h-[26px] w-[66px] left-0 top-0"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="caret-transparent"></div>
            <div className="caret-transparent">
              <div className="absolute caret-transparent flex right-0 bottom-0">
                <div className="caret-transparent z-[1000001]">
                  <div className="relative caret-transparent h-3.5 leading-[14px]">
                    <div className="absolute caret-transparent h-full opacity-70 w-full">
                      <div className="caret-transparent w-px"></div>
                      <div className="bg-neutral-100 caret-transparent h-full ml-px"></div>
                    </div>
                    <div className="relative text-black text-[10px] box-border caret-transparent inline-block text-right text-nowrap align-middle px-1.5">
                      <button
                        aria-label="Keyboard shortcuts"
                        title="Keyboard shortcuts"
                        type="button"
                        className="relative bg-transparent caret-transparent outline-offset-[3px] text-center text-nowrap p-0"
                      >
                        Keyboard shortcuts
                      </button>
                    </div>
                  </div>
                </div>
                <div className="caret-transparent z-[1000001]">
                  <div className="relative caret-transparent h-3.5 leading-[14px]">
                    <div className="absolute caret-transparent h-full opacity-70 w-full">
                      <div className="caret-transparent w-px"></div>
                      <div className="bg-neutral-100 caret-transparent h-full ml-px"></div>
                    </div>
                    <div className="relative text-black text-[10px] box-border caret-transparent inline-block text-right text-nowrap align-middle px-1.5">
                      <button
                        aria-label="Map Data"
                        title="Map Data"
                        type="button"
                        className="relative bg-transparent caret-transparent inline-block outline-offset-[3px] text-center text-nowrap p-0 md:hidden"
                      >
                        Map Data
                      </button>
                      <span className="box-border caret-transparent hidden outline-offset-[3px] text-nowrap md:inline">
                        Map data ©2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="caret-transparent hidden">
                  <div className="text-black bg-neutral-100 caret-transparent text-right">
                    Map data ©2025
                  </div>
                </div>
                <button
                  aria-label="Map Scale: 100 m per 47 pixels"
                  title="Map Scale: 100 m per 47 pixels"
                  type="button"
                  className="relative text-black text-[13.3333px] bg-transparent caret-transparent hidden h-3.5 leading-[14px] text-center p-0 font-arial"
                >
                  <div className="absolute caret-transparent h-full opacity-70 w-full">
                    <div className="caret-transparent w-px"></div>
                    <div className="bg-neutral-100 caret-transparent h-full ml-px"></div>
                  </div>
                  <div className="relative text-[10px] box-border caret-transparent inline-block text-right text-nowrap align-middle px-1.5 font-roboto">
                    <span className="box-border caret-transparent outline-offset-[3px] text-nowrap">
                      100 m 
                    </span>
                    <div className="relative caret-transparent inline-block h-2 text-nowrap w-[51px] -bottom-px">
                      <div className="absolute caret-transparent h-1 text-nowrap w-full left-0 top-0"></div>
                      <div className="caret-transparent h-2 text-nowrap w-1 left-0 top-0"></div>
                      <div className="absolute caret-transparent h-2 text-nowrap w-1 right-0 bottom-0"></div>
                      <div className="absolute bg-black caret-transparent h-0.5 text-nowrap bottom-px inset-x-px"></div>
                      <div className="absolute bg-black caret-transparent h-1.5 text-nowrap w-0.5 left-px top-px"></div>
                      <div className="absolute bg-black caret-transparent h-1.5 text-nowrap w-0.5 right-px bottom-px"></div>
                    </div>
                  </div>
                  <span className="text-[10px] box-border caret-transparent hidden outline-offset-[3px]">
                    Click to toggle between metric and imperial units
                  </span>
                </button>
                <div className="relative caret-transparent h-3.5 leading-[14px] z-[1000001]">
                  <div className="absolute caret-transparent h-full opacity-70 w-full">
                    <div className="caret-transparent w-px"></div>
                    <div className="bg-neutral-100 caret-transparent h-full ml-px"></div>
                  </div>
                  <div className="relative text-black text-[10px] box-border caret-transparent inline-block text-right text-nowrap align-middle px-1.5">
                    <a
                      aria-label="Terms (opens in new tab)"
                      href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                      className="box-border caret-transparent max-w-full outline-offset-[3px] text-nowrap"
                    >
                      Terms
                    </a>
                  </div>
                </div>
                <div className="relative caret-transparent h-3.5 leading-[14px]">
                  <div className="absolute caret-transparent h-full opacity-70 w-full">
                    <div className="caret-transparent w-px"></div>
                    <div className="bg-neutral-100 caret-transparent h-full ml-px"></div>
                  </div>
                  <div className="relative text-black text-[10px] box-border caret-transparent inline-block text-right text-nowrap align-middle px-1.5">
                    <a
                      title="Report errors in the road map or imagery to Google"
                      href="https://www.google.com/maps/@27.335521,-82.5446597,16z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                      className="relative box-border caret-transparent max-w-full outline-offset-[3px] text-nowrap"
                    >
                      Report a map error
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
