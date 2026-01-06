import Image from "next/image";

export const HeroSlider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="https://c.animaapp.com/mjr46i29PMq8a8/assets/mindmood-slider-image-1-1500x430.png"
        alt="MindMood slider image"
        className="object-cover w-full h-full"
        width={1500}
        height={430}
        loading="eager"
        priority
      />
    </div>
  );
};
