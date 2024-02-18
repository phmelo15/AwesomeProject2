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
  isFavorite: boolean;
}

export interface IBottomSheetCard {
  width?: string;
}
