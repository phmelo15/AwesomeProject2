import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import CoffeButton from '../../components/CoffeButton/CoffeButton';
import images from '../../constants/images';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import styles from './styles';

const OnBoarding = () => {
  const {navigate} = useNavigation<StackTypes>();

  return (
    <ImageBackground style={styles.background} source={images.onBoarding}>
      <View style={styles.cardOnBoarding}>
        <Text style={styles.title}>Good coffee, Good friends, let it blends</Text>
        <Text style={styles.description}>
          The best grain, the finest roast, the most powerful flavor.
        </Text>
        <CoffeButton
          onPress={() => {
            navigate('Login');
          }}
          title="Login"
          width="90%"
        />
        <CoffeButton
          onPress={() => {
            navigate('Register');
          }}
          title="Signin"
          width="90%"
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
