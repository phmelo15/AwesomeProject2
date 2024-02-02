import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Text, View} from 'react-native';
import CoffeButton from '../../../components/CoffeButton/CoffeButton';
import CoffeInput from '../../../components/CoffeInput/CoffeInput';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {IUserCredentials} from '../../../models/commomModels';
import AuthService from '../../../services/AuthService/AuthService';
import {useUserState} from '../../../store/userState';
import styles from './styles';

const Login = () => {
  const {goBack} = useNavigation();

  const {setToken, setUser} = useUserState();

  const login = async (form: IUserCredentials) => {
    try {
      const response = await AuthService.login(form?.username, form?.password);
      setUser(response);
      setToken(response.acess_token);
    } catch (error) {
      Alert.alert('Coffe app', 'Suas credencias estao incorretas.');
      console.log(error);
    }
  };

  const {control, handleSubmit} = useForm<IUserCredentials>();

  return (
    <View style={styles.container}>
      <View>
        <HeaderBack onPress={goBack} />
        <Text style={styles.title}>Digite suas credenciais, por favor</Text>
      </View>
      <View style={styles.inputContainer}>
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
      <CoffeButton onPress={handleSubmit(login)} title="Entrar" width="40%" />
    </View>
  );
};

export default Login;
