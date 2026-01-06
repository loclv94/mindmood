import Image from "next/image";
import { Card } from "@/components/ui/cards/Card";

export type ValueCardProps = {
  imageUrl: string;
  imageAlt?: string;
  imageSizes?: string;
  variant?: string;
};

export const ValueCard = (props: ValueCardProps) => {
  const sizes = props.imageSizes || "auto, (max-width: 300px) 100vw, 300px";
  const alt = props.imageAlt || "";

  return (
    <Card className="p-9">
      <Image
        src={props.imageUrl}
        alt={alt}
        width={300}
        height={300}
        sizes={sizes}
        className="relative w-full mx-auto my-2.5 py-2.5"
      />
    </Card>
  );
};
