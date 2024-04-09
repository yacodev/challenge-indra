import { PlanList } from './planModel';
import { User } from './userModel';

export interface StateSelector {
  user: User;
  plan: PlanList;
}
