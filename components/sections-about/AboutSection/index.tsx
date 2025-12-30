import { Hero } from "./components/Hero";
import { IntroText } from "./components/IntroText";
import { Container } from "@/components/Container";

export const AboutSection = () => {
  return (
    <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
      <Container>
        <main
          role="main"
          className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-5"
        >
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <Hero />
              <IntroText />
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};
