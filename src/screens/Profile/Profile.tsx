import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ProfileRoutes} from '../../navigation/ProfileStackScreen/ProfileStackScreen.routes';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import UserService from '../../services/UserService/UserService';
import {useUserState} from '../../store/userState';
import styles from './styles';

const Profile = () => {
  const {navigate} = useNavigation<StackTypes>();
  const {setToken, user, setUser} = useUserState();

  const navigateUserDetails = () => {
    navigate(ProfileRoutes.USERDETAILSSCREEN);
  };

  const getUser = async (id: string) => {
    try {
      const response = await UserService.getUser(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logoff = () => {
    setToken('');
  };

  useFocusEffect(
    useCallback(() => {
      getUser(user?.id);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <FontAwesome name={'user-circle-o'} size={78} color={'gray'} style={styles.photo} />
      <View style={styles.containerOptions}>
        <TouchableOpacity onPress={navigateUserDetails}>
          <Text style={styles.textOptions}>Dados do usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoff}>
          <Text style={styles.textOptions}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
