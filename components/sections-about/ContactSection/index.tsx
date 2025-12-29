import { ContactButton } from "./components/ContactButton";

export const ContactSection = () => {
  return (
    <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
      <div className="relative box-border caret-transparent clear-both max-w-[85%] w-[85%] mx-auto px-0 md:max-w-[1310px] md:w-full md:px-[50px]">
        <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-5">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
