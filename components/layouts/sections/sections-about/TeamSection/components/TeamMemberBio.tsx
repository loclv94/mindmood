import { Card } from "@/components/ui/cards/Card";

export type TeamMemberBioProps = {
  paragraphs: string[];
};

export const TeamMemberBio = (props: TeamMemberBioProps) => {
  return (
    <Card className="flex-1">
      {props.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-neutral-600 text-[14px] md:text-[15.6px] font-light leading-[22px] md:leading-[24.96px] my-[10px] md:my-[13.26px] font-museo_sans_rounded"
        >
          {paragraph}
        </p>
      ))}
    </Card>
  );
};
