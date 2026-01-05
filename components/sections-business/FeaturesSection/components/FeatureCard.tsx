import { Card } from "@/components/Card";
import Image from "next/image";

export type FeatureCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  variant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card className="h-full p-9">
      <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          width={300}
          height={300}
          sizes="(max-width: 300px) 100vw, 300px"
          className="relative aspect-square clear-both max-w-full w-[300px] mx-auto my-2.5 py-2.5"
        />
      </p>
      <h2 className="text-[26px] font-medium leading-[36.4px] text-center mt-[39px] mb-2.5 font-museomoderno">
        {props.title}
      </h2>

      <div className="clear-both">
        <p className="text-neutral-600 text-[15.6px] font-light leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
          {props.description}
        </p>
      </div>
    </Card>
  );
};
