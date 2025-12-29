import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

export type SocialLinksProps = {
  variant: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
};

export const SocialLinks = (props: SocialLinksProps) => {
  const ulVariantClass =
    props.variant === "variant1"
      ? "hidden float-left h-auto leading-[10.4px] mt-[-15px] overflow-hidden ml-0 pb-0.5 right-0 top-2/4 md:absolute md:float-none md:h-[30px] md:leading-[30px] md:ml-[-9px] md:pb-0"
      : "float-right h-[30px] ml-[30px] -mt-2.5";
  const liVariantClass =
    props.variant === "variant1"
      ? "inline-block float-none leading-[10.4px] md:block md:float-left md:leading-[30px]"
      : "relative block float-left overflow-hidden rounded-[300px] top-[5px]";
  const aVariantClass =
    props.variant === "variant1"
      ? "text-neutral-400 rounded-[100px] flex items-center justify-center"
      : "leading-[30px] text-center rounded-[300px] flex items-center justify-center";
  const iconSize = props.variant === "variant1" ? 18 : 16;
  const iconColor =
    props.variant === "variant1" ? "currentColor" : "currentColor";

  return (
    <ul
      className={`relative box-border caret-transparent list-none z-[150] pl-0 ${ulVariantClass}`}
    >
      <li
        className={`box-border caret-transparent h-full w-[30px] ${liVariantClass}`}
      >
        <a
          aria-label="Link to Facebook"
          href={props.facebookUrl}
          title="Link to Facebook"
          className={`relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors ${aVariantClass}`}
        >
          <FaFacebookF size={iconSize} color={iconColor} />
          <span className="sr-only">Link to Facebook</span>
        </a>
      </li>
      <li
        className={`box-border caret-transparent h-full w-[30px] ${liVariantClass}`}
      >
        <a
          aria-label="Link to X"
          href={props.twitterUrl}
          title="Link to X"
          className={`relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors ${aVariantClass}`}
        >
          <FaXTwitter size={iconSize} color={iconColor} />
          <span className="sr-only">Link to X</span>
        </a>
      </li>
      <li
        className={`box-border caret-transparent h-full w-[30px] ${liVariantClass}`}
      >
        <a
          aria-label="Link to Instagram"
          href={props.instagramUrl}
          title="Link to Instagram"
          className={`relative box-border caret-transparent block float-left h-full max-w-full min-h-[30px] w-[30px] z-[2] hover:text-slate-300 transition-colors ${aVariantClass}`}
        >
          <FaInstagram size={iconSize} color={iconColor} />
          <span className="sr-only">Link to Instagram</span>
        </a>
      </li>
    </ul>
  );
};
