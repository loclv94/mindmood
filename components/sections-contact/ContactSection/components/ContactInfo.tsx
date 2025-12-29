import { EmailButton } from "@/components/EmailButton";
import { MapContainer } from "@/components/MapContainer";

export const ContactInfo = () => {
  return (
    <div className="relative box-border caret-transparent clear-left float-left min-h-px w-full z-[1] mb-5 md:w-[47%] md:mb-0">
      <section className="box-border caret-transparent">
        <div className="box-border caret-transparent clear-both">
          <h3 className="text-[16.9px] box-border caret-transparent leading-[23.66px] mb-2 font-museo_sans_rounded">
            If you’d like to get in touch:
          </h3>
          <h2 className="text-[26px] font-medium box-border caret-transparent leading-[36.4px] mb-2.5 font-museomoderno">
            1290 N. Palm Avenue (Bay Plaza Exec Ctr)
            <br className="box-border caret-transparent" />
            Suite 108
            <br className="box-border caret-transparent" />
            Sarasota, FL
            <br className="box-border caret-transparent" />
            34236
            <br className="box-border caret-transparent" />
            US
          </h2>
        </div>
      </section>
      <EmailButton />
      <MapContainer />
    </div>
  );
};
