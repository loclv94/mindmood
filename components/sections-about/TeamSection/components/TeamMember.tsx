import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";

import { TeamMemberImage } from "./TeamMemberImage";

export type TeamMemberProps = {
  name: string;
  imageUrl?: string;
  imageWidth?: string;
  imageAspectRatio?: string;
};

export const TeamMember = (props: TeamMemberProps) => {
  return (
    <Card className="w-full md:w-[29.3333%]">
      {props.imageUrl && (
        <div className="w-full relative aspect-687/1030">
          <Link
            href={props.imageUrl}
            aria-label={props.name}
            className="overflow-hidden rounded-[3px]"
          >
            <Image src={props.imageUrl} alt={props.name} fill />
          </Link>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        <h3 className="text-[16.9px] leading-[23.66px] font-museo_sans_rounded">
          {props.name}
        </h3>
        <div className="flex-1">
          <hr />
        </div>
      </div>
    </Card>
  );
};
