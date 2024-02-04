import {RouteProp} from '@react-navigation/native';

export enum HomeRoutes {
  HOMESCREEN = 'HomeScreen',
  COFFEDETAILS = 'CoffeDetails',
}

export type HomeParams = {
  [HomeRoutes.HOMESCREEN]: undefined;
  [HomeRoutes.COFFEDETAILS]: undefined;
};

export type HomeRouteParams<Type extends keyof HomeParams = HomeRoutes> = RouteProp<
  HomeParams,
  Type
>;
