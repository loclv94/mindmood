export type FeatureCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  variant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[29.3333%] md:mt-[50px] md:mb-0 ${props.variant}`}
    >
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              sizes="(max-width: 300px) 100vw, 300px"
              className="relative aspect-[auto_300_/_300] box-border caret-transparent clear-both max-w-full w-[300px] mx-auto my-2.5 py-2.5"
            />
          </p>
          <h2 className="text-[26px] font-medium box-border caret-transparent leading-[36.4px] text-center mt-[39px] mb-2.5 font-museomoderno">
            {props.title}
          </h2>
        </div>
      </section>
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] text-center my-[13.26px] font-museo_sans_rounded">
            {props.description}
          </p>
        </div>
      </section>
    </div>
  );
};
