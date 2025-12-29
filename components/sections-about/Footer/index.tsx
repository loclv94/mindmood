import { FooterContent } from "./components/FooterContent";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Copyright and company info"
      className="relative text-slate-700 text-[11px] bg-white box-border caret-transparent clear-both z-[1] border-slate-200 -mt-px border-t"
    >
      <FooterContent />
    </footer>
  );
};
