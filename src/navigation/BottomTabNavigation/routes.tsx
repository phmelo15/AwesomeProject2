import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen/HomeScreen';
import Favourites from '../../screens/Favourites/Favourites';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const homeScreen = 'Home';
const favouritesScreen = 'Favourites';

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeScreen) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === favouritesScreen) {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Favourites" component={Favourites} /> */}
    </Tab.Navigator>
  );
}
