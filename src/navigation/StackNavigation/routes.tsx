import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/Colors';
import {useNavControl} from '../../context/NavigationControl';
import Login from '../../screens/Auth/Login/Login';
import Register from '../../screens/Auth/Register/Register';
import Cart from '../../screens/Cart/Cart';
import Favourites from '../../screens/Favourites/Favourites';
import HomeScreen from '../../screens/Home/HomeScreen/HomeScreen';
import MapBoxTest from '../../screens/MapBoxTest/MapBoxTest';
import OnBoarding from '../../screens/OnBoarding/OnBoarding';
import Profile from '../../screens/Profile/Profile';
import UserDetails from '../../screens/UserDetails/UserDetails';
import {useUserState} from '../../store/userState';
import {HomeStackScreen} from '../HomeStackScreen/HomeStackScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const homeScreen = 'Home';
const favouritesScreen = 'Favourites';
const cartScreen = 'Cart';
const profileScreen = 'Profile';

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreen">
      <ProfileStack.Screen
        component={Profile}
        name="ProfileScreen"
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        component={UserDetails}
        name="UserDetailsScreen"
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        component={MapBoxTest}
        name="MapBoxTestScreen"
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export const PublicStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="OnBoarding">
      <HomeStack.Screen
        component={OnBoarding}
        name="OnBoarding"
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconColor;
          let iconType;
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
  const {navigationType} = useNavControl();

  const {token} = useUserState();

  return (
    <NavigationContainer>
      {token ? <MainTabScreen /> : <PublicStackScreen />}
    </NavigationContainer>
  );
};
