import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, View} from 'react-native';
import CoffeButton from '../../../components/CoffeButton/CoffeButton';
import CoffeInput from '../../../components/CoffeInput/CoffeInput';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {IUserCredentials} from '../../../models/commomModels';
import AuthService from '../../../services/AuthService/AuthService';
import {useUserState} from '../../../store/userState';
import {Container, InputContainer, Title} from './styles';
import {ActivityIndicator} from '../../Favourites/styles';
import {Colors} from '../../../constants/Colors';

const Login = () => {
  const {goBack} = useNavigation();

  const {setToken, setUser} = useUserState();
  const [secureText, setSecureText] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (form: IUserCredentials) => {
    setLoading(true);
    try {
      const response = await AuthService.login(form?.username, form?.password);
      setUser(response);
      setToken(response.acess_token);
    } catch (error) {
      Alert.alert('Coffe app', 'Suas credencias estao incorretas.');
      console.log(error);
    }
    setLoading(false);
  };

  const {control, handleSubmit} = useForm<IUserCredentials>();

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size={20} color={Colors.gray} />
      ) : (
        <>
          <View>
            <HeaderBack onPress={goBack} />
            <Title>Digite suas credenciais, por favor</Title>
          </View>
          <InputContainer>
            <CoffeInput
              control={control}
              name="username"
              placeholderText="Digite seu nickname..."
            />
            <CoffeInput
              control={control}
              name="password"
              placeholderText="Digite sua senha..."
              secureTextEntry
              changeSecureText={() => setSecureText(!secureText)}
              showEye={secureText}
            />
          </InputContainer>
          <CoffeButton onPress={handleSubmit(login)} title="Entrar" width="40%" />
        </>
      )}
    </Container>
  );
};

export default Login;
