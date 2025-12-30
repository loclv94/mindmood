import Image from "next/image";
import { Container } from "@/components/Container";

export const FeaturesSection = () => {
  return (
    <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: We're Always Here */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6 w-full relative aspect-square">
              <Image
                src="/assets/images/feature-1.png"
                alt="Moon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              We&apos;re Always Here
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>
                Life doesn&apos;t wait for business hours and neither do we.
              </p>
              <p>
                <strong className="text-slate-700">mindmood</strong> is here
                whenever you need someone to lean on. Whether it&apos;s a 2 a.m.
                spiral of anxious thoughts or a quiet moment during your lunch
                break, our AI-powered support is awake and ready to listen.
              </p>
              <p>You&apos;re never left waiting, never left alone.</p>
            </div>
          </div>

          {/* Card 2: Your Privacy Matters */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6 w-full relative aspect-square">
              <Image
                src="/assets/images/feature-2.png"
                alt="Moon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              Your Privacy Matters
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>Your mental health journey is yours alone.</p>
              <p>
                That&apos;s why{" "}
                <strong className="text-slate-700">mindmood</strong> is fully
                HIPAA-certified and engineered with security at its core. Every
                chat, every note, every self-care moment stays completely
                private and confidential.
              </p>
              <p>Because feeling safe is the first step to feeling better.</p>
            </div>
          </div>

          {/* Card 3: No Judgement, Only Care */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6 w-full relative aspect-square">
              <Image
                src="/assets/images/feature-3.png"
                alt="Moon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              No Judgement, Only Care.
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>We believe every mind deserves kindness.</p>
              <p>
                <strong className="text-slate-700">mindmood</strong> is built on
                radical inclusion, designed to embrace every story, every
                identity, and every lived experience. Whether you&apos;re
                LGBTQ+, BIPOC, neurodiverse, or navigating challenges others
                might not understand, this is a place where you&apos;re safe,
                seen, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
