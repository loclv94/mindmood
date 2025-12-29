export type ValueCardProps = {
  imageUrl: string;
  imageAlt?: string;
  imageSizes?: string;
  variant?: string;
};

export const ValueCard = (props: ValueCardProps) => {
  const variantClass = props.variant || "clear-left";
  const sizes = props.imageSizes || "auto, (max-width: 300px) 100vw, 300px";
  const alt = props.imageAlt || "";

  return (
    <div
      className={`relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] mt-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[29.3333%] md:mt-[50px] md:mb-0 ${variantClass}`}
    >
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
            <img
              src={props.imageUrl}
              alt={alt}
              sizes={sizes}
              className="relative aspect-[auto_300_/_300] box-border caret-transparent clear-both max-w-full w-[300px] mx-auto my-2.5 py-2.5"
            />
          </p>
        </div>
      </section>
    </div>
  );
};
