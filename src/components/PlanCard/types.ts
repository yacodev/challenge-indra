import { PlanList } from '../../models/planModel';

export interface PlanCardProps {
  plans: PlanList[];
  onSelectPlan: (index: number) => void;
  showDiscount: boolean;
}
