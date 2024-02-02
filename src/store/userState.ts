import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface UserState {
  user: IUserData;
  token: string;
  userName: string;
  clientId: string;
  userId: string;
  uAdmin: string;
  setAdmin: (userAdmin: string) => void;
  setUser: (newUser: IUserData) => void;
  setUserName: (newUserName: string) => void;
  setClientId: (newClientId: string) => void;
  setUserId: (newUserId: string) => void;
  setToken: (userToken: string) => void;
}

interface IUserData {
  id: string;
  username: string;
  password: string;
  createdAt: string;
  profile: IUserProfile;
  profileCreated: boolean;
}

interface IUserProfile {
  id: string;
  firstname?: string;
  lastname?: string;
  age?: string;
  email?: string;
  dob?: string;
}

export const useUserState = create(
  persist<UserState>(
    (set, get) => ({
      user: {
        id: '',
        username: '',
        password: '',
        createdAt: '',
        profile: {id: ''},
        profileCreated: false,
      },
      token: '',
      userName: '',
      clientId: '',
      userId: '',
      uAdmin: '',
      setAdmin: userAdmin =>
        set(state => ({
          uAdmin: userAdmin,
        })),
      setUser: newUser =>
        set(state => ({
          user: newUser,
        })),
      setUserName: newUserName =>
        set(state => ({
          userName: newUserName,
        })),
      setClientId: newClientId =>
        set(state => ({
          clientId: newClientId,
        })),
      setUserId: newUserId =>
        set(state => ({
          userId: newUserId,
        })),
      setToken: userToken =>
        set(state => ({
          token: userToken,
        })),
    }),
    {
      name: 'awesome@user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
