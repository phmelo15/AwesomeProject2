import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Image, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import BottomSheetDetails from '../../components/BottomSheetDetails/BottomSheetDetails';
import images from '../../constants/images';
import {
  HomeRouteParams,
  HomeRoutes,
} from '../../navigation/HomeStackScreen/HomeStackScreen.routes';
import styles from './styles';

const CoffeDetails = () => {
  const {params} = useRoute<HomeRouteParams<HomeRoutes.COFFEDETAILS>>();

  return (
    <View style={styles.container}>
      <Image source={images.cappuccinoBackground} style={styles.image} />
      <BackButton />
      <BottomSheetDetails data={params.data} />
    </View>
  );
};

export default CoffeDetails;
