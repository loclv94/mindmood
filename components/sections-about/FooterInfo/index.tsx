import { ContactDetails } from "./components/ContactDetails";
import { Container } from "@/components/Container";

export const FooterInfo = () => {
  return (
    <div className="relative text-slate-700 bg-white box-border caret-transparent clear-both z-[1] border-slate-200 pt-[15px] pb-[30px] border-t">
      <Container>
        <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mb-5 md:mb-0">
          <ContactDetails />
        </div>
      </Container>
    </div>
  );
};
