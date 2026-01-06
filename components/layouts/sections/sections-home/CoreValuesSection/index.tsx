import Image from "next/image";
import { Container } from "@/components/layouts/Container";
import { ValueCard } from "./components/ValueCard";
import { Divider } from "@/components/ui/divider/Divider";

export const CoreValuesSection = () => {
  return (
    <Container>
      <h2 className="text-[26px] text-brand font-medium leading-[36.4px] text-center mb-2.5 font-museomoderno">
        <strong className="font-bold box-border caret-transparent">
          That’s why mindmood is built with:
        </strong>
      </h2>

      <div className="w-full mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-[6%] gap-y-12.5">
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_55_40-PM-300x300.png" />
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-07_10_14-PM-300x300.png" />
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_59_04-PM-300x300.png" />
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-06_31_24-PM-300x300.png" />
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-06_22_57-PM-300x300.png" />
        <ValueCard imageUrl="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-07_08_01-PM-300x300.png" />
      </div>

      <Divider />

      <section className="box-border caret-transparent">
        <div className="clear-both">
          <h2 className="text-[26px] font-medium text-brand leading-[36.4px] text-center mb-2.5 font-museomoderno">
            <strong className="font-bold box-border caret-transparent">
              What makes mindmood different
            </strong>
          </h2>
          <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
            mindmood isn’t just another mental health chatbot, it’s built to
            truly understand, support, and stay with you for the long run.
          </p>
        </div>
      </section>
      <div className="table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_38_10-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_42_09-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                  style={{ height: "auto" }}
                />
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_28_44-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_52_21-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="table-fixed w-full mt-[50px] md:table">
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] clear-left block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_24_39-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
        <div className="table-cell w-[6%]"></div>
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] block min-h-px align-top w-full z-[1] ml-0 mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[47%] md:ml-[6%] md:mt-[50px] md:mb-0">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <Image
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-30-2025-at-10_21_32-AM.png"
                  alt=""
                  width={450}
                  height={300}
                  sizes="(max-width: 450px) 100vw, 450px"
                  className="relative  max-w-full w-[450px] h-auto mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};
