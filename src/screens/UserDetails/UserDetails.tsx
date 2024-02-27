import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Button, ScrollView, Text, View} from 'react-native';
import CoffeButton from '../../components/CoffeButton/CoffeButton';
import CoffeInput from '../../components/CoffeInput/CoffeInput';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import UserService from '../../services/UserService/UserService';
import {useUserState} from '../../store/userState';
import styles from './styles';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';

interface IFormData {
  firstname: string | undefined;
  lastname: string | undefined;
  age: string | undefined;
  email: string | undefined;
  dob: string | undefined;
}

const UserDetails = () => {
  const {user} = useUserState();
  const {goBack, navigate} = useNavigation<StackTypes>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstname: user?.profile?.firstname,
      lastname: user?.profile?.lastname,
      age: user?.profile?.age?.toString(),
      email: user?.profile?.email,
      dob: user?.profile?.dob,
    },
  });

  const createProfileDetails = async (formData: IFormData) => {
    console.log('caiu na funcao de criar');
    try {
      const response = await UserService.createProfileDetails(user.id, formData);

      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfileDetails = async (formData: IFormData) => {
    try {
      const response = await UserService.updateProfileDetails(
        user?.profile?.id,
        formData,
      );
      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerInput}>
          <HeaderBack onPress={goBack} />
          <Text style={styles.title}>
            Olá Pedro, preencha os campos com suas informacoes{' '}
          </Text>
          <CoffeInput
            control={control}
            name="firstname"
            placeholderText="Primeiro nome..."
          />
          <CoffeInput control={control} name="lastname" placeholderText="Sobrenome..." />
          <CoffeInput control={control} name="age" placeholderText="Idade..." />
          <CoffeInput control={control} name="email" placeholderText="E-mail..." />
          <CoffeInput
            control={control}
            name="dob"
            placeholderText="Data de nascimento..."
            isMasked
            mask="99/99/9999"
          />
        </View>
        <CoffeButton
          onPress={
            user?.profileCreated
              ? handleSubmit(updateProfileDetails)
              : handleSubmit(createProfileDetails)
          }
          title="Enviar"
          width="90%"
        />
      </ScrollView>
    </View>
  );
};

export default UserDetails;
