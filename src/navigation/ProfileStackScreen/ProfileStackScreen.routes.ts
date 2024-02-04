import {RouteProp} from '@react-navigation/native';

export enum ProfileRoutes {
  PROFILESCREEN = 'ProfileScreen',
  USERDETAILSSCREEN = 'UserDetailsScreen',
}

export type ProfileParams = {
  [ProfileRoutes.PROFILESCREEN]: undefined;
  [ProfileRoutes.USERDETAILSSCREEN]: undefined;
};

export type ProfileRouteParams<Type extends keyof ProfileParams = ProfileRoutes> =
  RouteProp<ProfileParams, Type>;
