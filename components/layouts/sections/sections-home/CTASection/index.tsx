import { Container } from "@/components/layouts/Container";
import { Card } from "@/components/ui/cards/Card";
import { GetInTouchButton } from "@/components/ui/buttons/GetInTouchButton";

export const CTASection = () => {
  return (
    <div className="bg-white">
      <Container className="py-5 px-12.5">
        <Card className="text-center max-w-[1100px] mx-auto">
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                <img
                  src="https://c.animaapp.com/mjr46i29PMq8a8/assets/ChatGPT-Image-Jul-29-2025-at-05_50_35-PM.png"
                  alt=""
                  sizes="auto, (max-width: 350px) 100vw, 350px"
                  className="relative aspect-[auto_350_/_233] clear-both max-w-full w-[350px] mx-auto my-2.5 py-2.5"
                />
              </p>
            </div>
          </section>
          <section className="box-border caret-transparent">
            <div className="clear-both">
              <h2 className="text-[26px] text-brand font-medium leading-[36.4px] text-center mb-2.5 font-museomoderno">
                Join us on this transformative journey towards better mental
                health, where you are free to be yourself, explore your
                emotions, and receive support in a positive, confidential, and
                friendly setting.
              </h2>
            </div>
          </section>
          <GetInTouchButton />
        </Card>
      </Container>
    </div>
  );
};
