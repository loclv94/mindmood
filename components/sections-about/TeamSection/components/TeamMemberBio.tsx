import { Card } from "@/components/Card";

export type TeamMemberBioProps = {
  paragraphs: string[];
};

export const TeamMemberBio = (props: TeamMemberBioProps) => {
  return (
    <Card className="flex-1">
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          {props.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </Card>
  );
};
