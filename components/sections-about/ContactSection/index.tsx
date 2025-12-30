import { ContactButton } from "./components/ContactButton";
import { Container } from "@/components/Container";

export const ContactSection = () => {
  return (
    <div className="text-slate-700 bg-white box-border caret-transparent clear-both float-left w-full ml-0 md:w-[70%] md:ml-[15%]">
      <Container>
        <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-5">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <ContactButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
