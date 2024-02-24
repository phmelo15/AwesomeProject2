import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, View} from 'react-native';
import CoffeButton from '../../../components/CoffeButton/CoffeButton';
import CoffeInput from '../../../components/CoffeInput/CoffeInput';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import AuthService from '../../../services/AuthService/AuthService';
import {useUserState} from '../../../store/userState';
import {Container, Title} from './styles';

interface IUserCredentials {
  username: string;
  password: string;
}

const Register = () => {
  const {goBack} = useNavigation();
  const {setToken, setUser} = useUserState();

  const [credentials, setCredentials] = useState<IUserCredentials>({
    username: '',
    password: '',
  });

  const register = async () => {
    try {
      const response = await AuthService.createUser(
        credentials.username,
        credentials.password,
      );
      console.log(response.data);
      setUser(response);
      setToken(response.acess_token);
      Alert.alert('Coffe App', 'Usuario cadastrado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  const {control, handleSubmit} = useForm<IUserCredentials>();

  return (
    <Container>
      <View>
        <HeaderBack onPress={goBack} />
        <Title>Digite suas credenciais, por favor</Title>
      </View>
      <View>
        <CoffeInput
          control={control}
          name="username"
          placeholderText="Digite seu nickname..."
        />
        <CoffeInput
          control={control}
          name="password"
          placeholderText="Digite sua senha..."
        />
      </View>
      <CoffeButton onPress={() => handleSubmit(register)} title="Cadastrar" width="40%" />
    </Container>
  );
};

export default Register;
