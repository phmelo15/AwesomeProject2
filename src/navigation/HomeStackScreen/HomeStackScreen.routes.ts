import {RouteProp} from '@react-navigation/native';
import {ICoffeInfo} from '../../models/coffeModels';

export enum HomeRoutes {
  HOMESCREEN = 'HomeScreen',
  COFFEDETAILS = 'CoffeDetails',
}

export type HomeParams = {
  [HomeRoutes.HOMESCREEN]: undefined;
  [HomeRoutes.COFFEDETAILS]: {
    data: ICoffeInfo;
  };
};

export type HomeRouteParams<Type extends keyof HomeParams = HomeRoutes> = RouteProp<
  HomeParams,
  Type
>;
