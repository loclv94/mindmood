import { ContactButton } from "./ContactButton";

export const WorkplaceContent = () => {
  return (
    <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mt-0 mb-5 md:w-[47%] md:mt-[50px] md:mb-0">
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h5 className="text-base font-semibold box-border caret-transparent leading-[17.6px]">
            mindmood Navigator
          </h5>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            Your branded wellbeing hub. AI gently guides employees to the right
            support at the right time. Whether that’s AI tools, your EAP,
            internal resources, or, if your company partners with Wellbeing by
            PS, access to therapy, coaching, and group support from
            industry-trained mental health professionals.
          </p>
          <h5 className="text-base font-semibold box-border caret-transparent leading-[17.6px] mt-6">
            mindmood AI
          </h5>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            Clinically designed conversational AI for confidential, 24/7 mental
            health support.
          </p>
          <h5 className="text-base font-semibold box-border caret-transparent leading-[17.6px] mt-6">
            Self-Guided Content
          </h5>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            Evidence-based exercises for anxiety, burnout, sleep, resilience,
            and more.
          </p>
          <h5 className="text-base font-semibold box-border caret-transparent leading-[17.6px] mt-6">
            Human Coaching (Optional Add-On)
          </h5>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            One-to-one chat-based coaching for extra motivation and
            accountability.
          </p>
        </div>
      </section>
      <div className="relative box-border caret-transparent clear-both h-[25px] leading-[25px] w-full">
        <span className="absolute box-border caret-transparent block h-px w-full left-0 top-2/4">
          <span className="box-border caret-transparent"></span>
        </span>
      </div>
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] mb-2 font-museo_sans_rounded">
            Embed mindmood.com into your workflow today
          </h3>
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] mb-2 font-museo_sans_rounded">
            <span className="text-base box-border caret-transparent">
              Reach out to our team, we’re ready to help support you.
            </span>
          </h3>
        </div>
      </section>
      <div className="box-border caret-transparent inline-block">
        <ContactButton />
      </div>
    </div>
  );
};
