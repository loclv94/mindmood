import { Container } from "@/components/layouts/Container";
import { Card } from "@/components/ui/cards/Card";

import { WorkplaceContent } from "./components/WorkplaceContent";
import { WorkplaceFeatures } from "./components/WorkplaceFeatures";

export const WorkplaceSection = () => {
  return (
    <div className="bg-white">
      <Container className="py-6 md:py-12.5">
        <Card>
          <h2 className="text-[20px] md:text-[26px] font-medium leading-[28px] md:leading-[36.4px] text-center mb-2 md:mb-2.5 font-museomoderno">
            mindmood.com in the workplace
          </h2>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-18 py-6 md:py-12.5">
          <WorkplaceContent />
          <WorkplaceFeatures />
        </div>
      </Container>
    </div>
  );
};
