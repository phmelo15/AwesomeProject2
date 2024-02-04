import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParams} from '../HomeStackScreen/HomeStackScreen.routes';
import {ProfileParams} from '../ProfileStackScreen/ProfileStackScreen.routes';
import {PublicParams} from '../PublicStackScreen/PublicStackScreen.routes';

export type RootStackNavigationParam = HomeParams & ProfileParams & PublicParams;

export type StackTypes = NativeStackNavigationProp<RootStackNavigationParam>;
