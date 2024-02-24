import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ProfileRoutes} from '../../navigation/ProfileStackScreen/ProfileStackScreen.routes';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import UserService from '../../services/UserService/UserService';
import {useUserState} from '../../store/userState';
import {Container, ContainerOptions, Photo, TextOptions, Title} from './styles';

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
    <Container>
      <Title>Perfil</Title>
      <Photo name={'user-circle-o'} size={78} color={'gray'} />
      <ContainerOptions>
        <TouchableOpacity onPress={navigateUserDetails}>
          <TextOptions>Dados do usuário</TextOptions>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoff}>
          <TextOptions>Sair</TextOptions>
        </TouchableOpacity>
      </ContainerOptions>
    </Container>
  );
};

export default Profile;
