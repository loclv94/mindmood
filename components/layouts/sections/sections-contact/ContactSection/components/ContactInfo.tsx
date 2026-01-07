import { EmailButton } from "@/components/ui/buttons/EmailButton";

export const ContactInfo = () => {
  const address = "1290 N. Palm Avenue, Suite 108, Sarasota, FL 34236";
  // Using Google Maps embed without API key (free method)
  // Using the embed URL format that minimizes JavaScript API calls
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div>
      <h3 className="text-[14px] md:text-[16.9px] leading-[20px] md:leading-[23.66px] mb-2 font-museo_sans_rounded">
        If you&apos;d like to get in touch:
      </h3>
      <h2 className="text-[20px] md:text-[26px] font-medium leading-[28px] md:leading-[36.4px] mb-2 md:mb-2.5 font-museomoderno">
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
      <EmailButton />
      <div className="mt-4 md:mt-5 w-full">
        <iframe
          src={mapUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-sm md:h-[450px]"
          title={`Google Map - ${address}`}
        ></iframe>
      </div>
    </div>
  );
};
