import { TeamMemberImage } from "./TeamMemberImage";

export type TeamMemberProps = {
  name: string;
  imageUrl?: string;
  imageWidth?: string;
  imageAspectRatio?: string;
  imageSizes?: string;
  showImage?: boolean;
};

export const TeamMember = (props: TeamMemberProps) => {
  return (
    <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent clear-left block min-h-px align-top w-full z-[1] mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[29.3333%] md:mb-0">
      {props.showImage && props.imageUrl ? (
        <div className="relative box-border caret-transparent clear-both max-w-full text-center mb-2.5 mx-auto">
          <div className="relative box-border caret-transparent inline-block max-w-full align-bottom mx-auto rounded-[3px]">
            <div className="box-border caret-transparent">
              <a
                href={props.imageUrl}
                aria-label={props.name}
                className="relative box-border caret-transparent block max-w-full overflow-hidden rounded-[3px] hover:text-slate-300"
              >
                <img
                  src={props.imageUrl}
                  alt=""
                  title={props.name}
                  sizes={props.imageSizes || "(max-width: 687px) 100vw, 687px"}
                  className={`relative ${
                    props.imageAspectRatio || "aspect-[auto_687_/_1030]"
                  } box-border caret-transparent max-w-full ${
                    props.imageWidth || "w-[687px]"
                  } rounded-[3px]`}
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <TeamMemberImage />
      )}
      <div className="relative box-border caret-transparent clear-both w-full mt-[50px] pb-2.5">
        <h3 className="text-[16.9px] box-border caret-transparent float-left leading-[23.66px] font-museo_sans_rounded">
          {props.name}
        </h3>
        <div className="relative box-border caret-transparent h-[24.7px] overflow-hidden">
          <div className="relative box-border caret-transparent opacity-15 w-full border-slate-700 ml-[15px] border-t top-2/4"></div>
        </div>
      </div>
    </div>
  );
};
