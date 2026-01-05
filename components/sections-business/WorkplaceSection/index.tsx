import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

import { WorkplaceContent } from "./components/WorkplaceContent";
import { WorkplaceFeatures } from "./components/WorkplaceFeatures";

export const WorkplaceSection = () => {
  return (
    <div className="bg-white">
      <Container className="py-12.5">
        <Card>
          <h2 className="text-[26px] font-medium box-border caret-transparent leading-[36.4px] text-center mb-2.5 font-museomoderno">
            mindmood.com in the workplace
          </h2>
        </Card>

        <WorkplaceContent />
        <WorkplaceFeatures />
      </Container>
    </div>
  );
};
