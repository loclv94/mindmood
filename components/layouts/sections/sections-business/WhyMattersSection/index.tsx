import { Container } from "@/components/layouts/Container";
import { Card } from "@/components/ui/cards/Card";

import { StatisticsGrid } from "./components/StatisticsGrid";

export const WhyMattersSection = () => {
  return (
    <div className="bg-white py-6 md:py-12.5">
      <Container>
        <Card>
          <h2 className="text-[20px] md:text-[26px] font-medium leading-[28px] md:leading-[36.4px] text-center mb-2 md:mb-2.5 font-museomoderno">
            Why It Matters
          </h2>
        </Card>

        <StatisticsGrid />
      </Container>
    </div>
  );
};
