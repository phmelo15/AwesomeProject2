import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen/HomeScreen';
import CoffeDetails from '../../screens/CoffeDetails/CoffeDetails';
import {HomeRoutes} from './HomeStackScreen.routes';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={HomeRoutes.HOMESCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={HomeRoutes.HOMESCREEN} component={HomeScreen} />
      <HomeStack.Screen name={HomeRoutes.COFFEDETAILS} component={CoffeDetails} />
    </HomeStack.Navigator>
  );
};
