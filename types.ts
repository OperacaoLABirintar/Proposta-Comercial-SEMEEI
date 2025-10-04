
export interface AxeDetail {
  title: string;
  description: string;
}

export interface Axe {
  title: string;
  subtitle: string;
  details: AxeDetail[];
}

export interface PricingPlan {
  frequency: string;
  originalPrice: string;
  discountedPrice: string;
  description: string;
}
