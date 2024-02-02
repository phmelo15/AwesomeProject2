import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import AuthService from '../../../services/AuthService/AuthService';
import axios, {Axios} from 'axios';
import CoffeButton from '../../../components/CoffeButton/CoffeButton';
import styles from './styles';
import {Colors} from '../../../constants/Colors';
import Header from '../../../components/Header/Header';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {useNavigation} from '@react-navigation/native';
import {useUserState} from '../../../store/userState';

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

  return (
    <View style={styles.container}>
      <View>
        <HeaderBack onPress={goBack} />
        <Text style={styles.title}>Digite suas credenciais, por favor</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu nickname..."
          style={styles.input}
          value={credentials.username}
          placeholderTextColor={Colors.lightGray}
          onChangeText={val => setCredentials({...credentials, username: val})}
        />
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
          value={credentials.password}
          placeholderTextColor={Colors.lightGray}
          onChangeText={val => setCredentials({...credentials, password: val})}
        />
      </View>
      <CoffeButton onPress={() => register()} title="Cadastrar" width="40%" />
    </View>
  );
};

export default Register;
