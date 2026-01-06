import { TeamMember, TeamMemberProps } from "./TeamMember";
import { TeamMemberBio } from "./TeamMemberBio";

export type TeamMemberRowProps = {
  member: TeamMemberProps;
  bioParagraphs: string[];
};

export const TeamMemberRow = ({
  member,
  bioParagraphs,
}: TeamMemberRowProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-18 mt-12.5">
      <TeamMember {...member} />
      <TeamMemberBio paragraphs={bioParagraphs} />
    </div>
  );
};
