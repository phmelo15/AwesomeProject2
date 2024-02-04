import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile/Profile';
import UserDetails from '../../screens/UserDetails/UserDetails';
import {ProfileRoutes} from './ProfileStackScreen.routes';

const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName={ProfileRoutes.PROFILESCREEN}>
      <ProfileStack.Screen
        component={Profile}
        name={ProfileRoutes.PROFILESCREEN}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        component={UserDetails}
        name={ProfileRoutes.USERDETAILSSCREEN}
        options={{
          headerShown: false,
        }}
      />
      {/* <ProfileStack.Screen
          component={MapBoxTest}
          name="MapBoxTestScreen"
          options={{
            headerShown: false,
          }}
        /> */}
    </ProfileStack.Navigator>
  );
};
