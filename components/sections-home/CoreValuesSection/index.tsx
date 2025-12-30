import { Container } from "@/components/Container";
import { ValueCard } from "./components/ValueCard";

export const CoreValuesSection = () => {
  return (
    <Container>
      <section className="">
        <div className="box-border caret-transparent clear-both">
          <h2 className="text-[26px] text-slate-700 font-medium box-border caret-transparent leading-[36.4px] text-center mb-2.5 font-museomoderno">
            <strong className="font-bold box-border caret-transparent">
              That’s why mindmood is built with:
            </strong>
          </h2>
        </div>
      </section>

      <div className="box-border caret-transparent table-fixed w-full mt-[50px] md:table">
        <ValueCard
          imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_55_40-PM-300x300.png"
          imageAlt=""
          imageSizes="(max-width: 300px) 100vw, 300px"
          variant="clear-left"
        />
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <ValueCard
          imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-07_10_14-PM-300x300.png"
          imageAlt=""
          imageSizes="(max-width: 300px) 100vw, 300px"
          variant=""
        />
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_59_04-PM-300x300.png" />
      </div>
      <div className="box-border caret-transparent block float-left table-fixed w-full mt-[50px] md:table">
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-06_31_24-PM-300x300.png" />
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-06_22_57-PM-300x300.png" />
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-07_08_01-PM-300x300.png" />
      </div>
      <div className="relative box-border h-[25px] leading-[25px] w-full my-[30px]">
        <span className="absolute box-border caret-transparent block h-px w-full border-slate-200 -mt-px border-t left-0 top-2/4">
          <span className="box-border caret-transparent"></span>
        </span>
      </div>
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h2 className="text-[26px] font-medium text-slate-700 leading-[36.4px] text-center mb-2.5 font-museomoderno">
            <strong className="font-bold box-border caret-transparent">
              What makes mindmood different
            </strong>
          </h2>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
            mindmood isn’t just another mental health chatbot, it’s built to
            truly understand, support, and stay with you for the long run.
          </p>
        </div>
      </section>
      <div className="box-border caret-transparent table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_38_10-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_42_09-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="box-border caret-transparent table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_28_44-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_52_21-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="box-border caret-transparent table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_24_39-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="box-border caret-transparent table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_21_32-AM.png"
                  alt=""
                  sizes="auto, (max-width: 450px) 100vw, 450px"
                  className="relative aspect-[auto_450_/_300] box-border caret-transparent clear-both max-w-full w-[450px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};
