export interface PlanList {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface Plans {
  list: PlanList[];
}
