import { Moon, ShieldCheck, HeartHandshake } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full py-12 md:py-16">
      <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: We're Always Here */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <Moon className="w-24 h-24 text-purple-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              We're Always Here
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>
                Life doesn't wait for business hours and neither do we.
              </p>
              <p>
                <strong className="text-slate-700">mindmood</strong> is here whenever you need someone to lean on. Whether it's a 2 a.m. spiral of anxious thoughts or a quiet moment during your lunch break, our AI-powered support is awake and ready to listen.
              </p>
              <p>
                You're never left waiting, never left alone.
              </p>
            </div>
          </div>

          {/* Card 2: Your Privacy Matters */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <ShieldCheck className="w-24 h-24 text-teal-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              Your Privacy Matters
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>
                Your mental health journey is yours alone.
              </p>
              <p>
                That's why <strong className="text-slate-700">mindmood</strong> is fully HIPAA-certified and engineered with security at its core. Every chat, every note, every self-care moment stays completely private and confidential.
              </p>
              <p>
                Because feeling safe is the first step to feeling better.
              </p>
            </div>
          </div>

          {/* Card 3: No Judgement, Only Care */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <HeartHandshake className="w-24 h-24 text-orange-200" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-museo_sans_rounded">
              No Judgement, Only Care.
            </h3>
            <div className="text-neutral-600 text-[15px] leading-relaxed space-y-3 font-museo_sans_rounded">
              <p>
                We believe every mind deserves kindness.
              </p>
              <p>
                <strong className="text-slate-700">mindmood</strong> is built on radical inclusion, designed to embrace every story, every identity, and every lived experience. Whether you're LGBTQ+, BIPOC, neurodiverse, or navigating challenges others might not understand, this is a place where you're safe, seen, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

