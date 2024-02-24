import {ICoffeInfo} from './coffeModels';

export interface IUserCredentials {
  username: string;
  password: string;
}

export interface ICoffeButton {
  onPress: () => void;
  title: string;
  width?: string;
  price?: number;
}

export interface ICoffeCard {
  data: ICoffeInfo;
  onpress: () => void;
  isFavorite: boolean;
  updateCoffe: () => void;
}

export interface IBackButton {
  onpress?: () => void;
}
