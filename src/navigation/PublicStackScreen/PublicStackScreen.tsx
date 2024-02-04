import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../../screens/OnBoarding/OnBoarding';
import Register from '../../screens/Auth/Register/Register';
import Login from '../../screens/Auth/Login/Login';
import {PublicRoutes} from './PublicStackScreen.routes';

const PublicStack = createNativeStackNavigator();

export const PublicStackScreen = () => {
  return (
    <PublicStack.Navigator initialRouteName={PublicRoutes.ONBOARDING}>
      <PublicStack.Screen
        component={OnBoarding}
        name={PublicRoutes.ONBOARDING}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        component={Register}
        name={PublicRoutes.REGISTER}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        component={Login}
        name={PublicRoutes.LOGIN}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};
