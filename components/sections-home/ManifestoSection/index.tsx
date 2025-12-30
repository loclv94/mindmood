import Image from "next/image";
import { Container } from "@/components/Container";

export const ManifestoSection = () => {
  return (
    <div className="relative bg-white my-12.5">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://c.animaapp.com/mjr46i29PMq8a8/assets/mindmood.ai-logo.jpg"
            alt="MindMood logo"
            width={498}
            height={134}
          />
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
            mindmood isn’t just another mental health app, it’s a movement to
            make care deeply compassionate and technologically advanced, scaling
            human empathy through AI to ensure support is available anytime.
          </p>
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
            <strong className="text-slate-700 font-bold box-border caret-transparent">
              We are redefining the future of mental health.
            </strong>
          </p>
        </div>
      </Container>
    </div>
  );
};
