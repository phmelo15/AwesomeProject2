import {useRoute} from '@react-navigation/native';
import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import BottomSheetDetails from '../../components/BottomSheetDetails/BottomSheetDetails';
import images from '../../constants/images';
import {
  HomeRouteParams,
  HomeRoutes,
} from '../../navigation/HomeStackScreen/HomeStackScreen.routes';
import {Container, Image} from './styles';

const CoffeDetails = () => {
  const {params} = useRoute<HomeRouteParams<HomeRoutes.COFFEDETAILS>>();

  return (
    <Container>
      <Image source={images.cappuccinoBackground} />
      <BackButton />
      <BottomSheetDetails data={params.data} />
    </Container>
  );
};

export default CoffeDetails;
