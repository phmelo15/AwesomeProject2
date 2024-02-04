import {RouteProp} from '@react-navigation/native';

export enum PublicRoutes {
  ONBOARDING = 'OnBoarding',
  REGISTER = 'Register',
  LOGIN = 'Login',
}

export type PublicParams = {
  [PublicRoutes.ONBOARDING]: undefined;
  [PublicRoutes.REGISTER]: undefined;
  [PublicRoutes.LOGIN]: undefined;
};

export type PublicRouteParams<Type extends keyof PublicParams = PublicRoutes> = RouteProp<
  PublicParams,
  Type
>;
