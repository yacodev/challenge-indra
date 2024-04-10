import { User } from '../../models/userModel';
import { PlanList } from '../../models/planModel';

export interface SummaryCardProps {
  user: User;
  plan: PlanList;
}
