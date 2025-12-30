import Image from "next/image";
import Link from "next/link";

export const WorkplaceSection = () => {
  return (
    <div className="box-border caret-transparent w-full">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-8 md:mb-12 text-center font-museo_sans_rounded">
        Workplace Support
      </h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Card - Text Content */}
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent rounded-[25px] p-6 md:p-8 flex flex-col">
          <section className="box-border caret-transparent flex-1">
            <div className="box-border caret-transparent clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                mindmood makes it simple to care for your employees with fast,
                compassionate mental health support. Our AI offers 24/7 guidance
                and knows when to connect someone with a human therapist or
                escalate to crisis care, so your team always feels safe and
                supported.
              </p>
              <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                Seamlessly integrate mindmood into your systems to create a
                healthier, happier workplace where mental wellbeing is a
                priority.
              </p>
            </div>
          </section>
          <div className="box-border caret-transparent clear-both text-center mt-6">
            <Link
              href="/business"
              aria-label="mindmood for the workplace"
              className="relative text-white font-semibold bg-slate-700 hover:bg-slate-800 box-border caret-transparent inline-block leading-[15.6px] max-w-full min-w-20 pt-[12px] pb-[12px] px-6 rounded-[8px] font-museomoderno transition-colors"
            >
              <span className="relative box-border caret-transparent z-10">
                mindmood for the workplace
              </span>
            </Link>
          </div>
        </div>

        {/* Right Card - Image Content */}
        <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent rounded-[25px] p-6 md:p-8 overflow-hidden">
          <div className="relative box-border caret-transparent clear-both max-w-full mx-auto">
            <div className="relative box-border caret-transparent w-full pb-[50%] rounded-[3px] overflow-hidden">
              <Image
                src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Aug-21-2025-04_22_39-PM-1-1030x515.png"
                alt="Workplace mental health support - two people having a supportive conversation in an office setting"
                fill
                className="object-cover rounded-[3px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
