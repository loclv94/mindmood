import Image from "next/image";

import { Container } from "@/components/layouts/Container";
import { GetInTouchButton } from "@/components/ui/buttons/GetInTouchButton";

export const IntegrationSection = () => {
  return (
    <div className="bg-white py-6 md:py-12.5">
      <Container>
        <h1 className="text-[14px] md:text-[16.9px] font-medium leading-[20px] md:leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
          Our support doesn't stop there
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-25 mt-6 md:mt-12.5">
          <div className="flex-1">
            <p className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] my-[10px] md:my-[13.26px] font-museo_sans_rounded">
              When a team member requires more in-depth care, mindmood
              integrates seamlessly with Wellbeing by PS, providing direct
              access to licensed mental health professionals. This smooth
              escalation ensures every individual receives the right level of
              support, with compassion, privacy, and ease.
            </p>
            <p className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] my-[10px] md:my-[13.26px] font-museo_sans_rounded">
              By combining smart, scalable technology with real human
              connection, mindmood and Wellbeing by PS empower you to create a
              healthier, more resilient workplace, without placing extra burden
              on your internal teams.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Image
              src="https://c.animaapp.com/mjr478t1erIxQN/assets/3-300x169.png"
              alt=""
              width={300}
              height={169}
              className="w-full max-w-[250px] md:max-w-[300px] h-auto"
            />
          </div>
        </div>
        <div className="text-center mt-5">
          <GetInTouchButton />
        </div>
      </Container>
    </div>
  );
};
