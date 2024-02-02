export interface ICoffeInfo {
  id: number;
  name: string;
  description?: string;
  price: number;
  ingredients: string;
  preparationTime?: number;
  image: string;
  available: boolean;
  type: string;
}
