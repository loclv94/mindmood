import Image from "next/image";

import { Container } from "@/components/layouts/Container";
import { GetInTouchButton } from "@/components/ui/buttons/GetInTouchButton";

export const IntegrationSection = () => {
  return (
    <div className="bg-white py-12.5">
      <Container>
        <h1 className="text-[16.9px] font-medium leading-[23.66px] text-left mb-2 font-museo_sans_rounded">
          Our support doesn’t stop there
        </h1>
        <div className="flex gap-25 mt-12.5">
          <div className="flex-1">
            <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
              When a team member requires more in-depth care, mindmood
              integrates seamlessly with Wellbeing by PS, providing direct
              access to licensed mental health professionals. This smooth
              escalation ensures every individual receives the right level of
              support, with compassion, privacy, and ease.
            </p>
            <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
              By combining smart, scalable technology with real human
              connection, mindmood and Wellbeing by PS empower you to create a
              healthier, more resilient workplace, without placing extra burden
              on your internal teams.
            </p>
          </div>

          <Image
            src="https://c.animaapp.com/mjr478t1erIxQN/assets/3-300x169.png"
            alt=""
            width={300}
            height={169}
          />
        </div>
        <div className="text-center mt-5">
          <GetInTouchButton />
        </div>
      </Container>
    </div>
  );
};
