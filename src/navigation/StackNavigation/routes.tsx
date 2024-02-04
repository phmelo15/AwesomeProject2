import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/Colors';
import Cart from '../../screens/Cart/Cart';
import Favourites from '../../screens/Favourites/Favourites';
import {useUserState} from '../../store/userState';
import {HomeStackScreen} from '../HomeStackScreen/HomeStackScreen';
import {ProfileStackScreen} from '../ProfileStackScreen/ProfileStackScreen';
import {PublicStackScreen} from '../PublicStackScreen/PublicStackScreen';

const Tab = createBottomTabNavigator();

const homeScreen = 'Home';
const favouritesScreen = 'Favourites';
const cartScreen = 'Cart';
const profileScreen = 'Profile';

export const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconColor;
          let rn = route.name;

          if (rn === homeScreen) {
            iconColor = focused ? Colors.brown : Colors.lightGray;
            return <Entypo name={'home'} size={22} color={iconColor} />;
          } else if (rn === favouritesScreen) {
            iconColor = focused ? Colors.brown : Colors.lightGray;
            return <AntDesign name={'heart'} size={20} color={iconColor} />;
          } else if (rn === cartScreen) {
            iconColor = focused ? Colors.brown : Colors.lightGray;
            return <FontAwesome5 name={'cart-plus'} size={20} color={iconColor} />;
          } else if (rn === profileScreen) {
            iconColor = focused ? Colors.brown : Colors.lightGray;
            return <FontAwesome name={'user-circle-o'} size={20} color={iconColor} />;
          }
        },
        tabBarActiveTintColor: Colors.brown,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export const Routes = () => {
  const {token} = useUserState();

  return (
    <NavigationContainer>
      {token ? <MainTabScreen /> : <PublicStackScreen />}
    </NavigationContainer>
  );
};
