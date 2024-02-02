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
  data: {
    type: string;
    desc: string;
    price: string;
    image: string;
  };
}
