import Image from "next/image";
import { Card } from "@/components/ui/cards/Card";

const statistics = [
  {
    src: "https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Aug-20-2025-at-03_20_08-PM.png",
    alt: "ChatGPT Image Aug 20, 2025 at 03_20_08 PM",
  },
  {
    src: "https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Aug-20-2025-at-03_20_05-PM.png",
    alt: "ChatGPT Image Aug 20, 2025 at 03_20_05 PM",
  },
  {
    src: "https://c.animaapp.com/mjr478t1erIxQN/assets/ChatGPT-Image-Aug-20-2025-at-03_12_35-PM.png",
    alt: "ChatGPT Image Aug 20, 2025 at 03_12_35 PM",
  },
];

export const StatisticsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-18 mt-12.5">
      {statistics.map((stat, index) => (
        <Card key={stat.src} className="overflow-hidden p-6 md:p-8">
          <Image
            src={stat.src}
            alt={stat.alt}
            width={500}
            height={300}
            className="rounded-sm"
          />
        </Card>
      ))}
    </div>
  );
};
