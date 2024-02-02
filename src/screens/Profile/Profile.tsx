import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useUserState} from '../../store/userState';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import UserService from '../../services/UserService/UserService';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';

const Profile = () => {
  const navigation = useNavigation<StackTypes>();
  const {setToken, user, setUser} = useUserState();

  const navigateUserDetails = () => {
    navigation.navigate('UserDetailsScreen');
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
