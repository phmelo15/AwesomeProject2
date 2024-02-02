import {ICoffeInfo} from './coffeModels';

export interface IUserCredentials {
  username: string;
  password: string;
}

export interface ICoffeButton {
  onPress?: () => void;
  title: string;
  width?: string;
}

export interface ICoffeCard {
  data: ICoffeInfo;
  onpress: () => void;
}

export interface IBackButton {
  onpress: () => void;
}
