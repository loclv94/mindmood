export type TeamMemberBioProps = {
  paragraphs: string[];
};

export const TeamMemberBio = (props: TeamMemberBioProps) => {
  return (
    <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[64.6667%] md:ml-[6%] md:mb-0">
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
    </div>
  );
};
