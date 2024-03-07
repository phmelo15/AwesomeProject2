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

interface ISelectBackground {
  Cappuccino: string;
}

const CoffeDetails = () => {
  const {params} = useRoute<HomeRouteParams<HomeRoutes.COFFEDETAILS>>();
  const coffeData = params.data;
  const selectBackground: ISelectBackground = {
    Cappuccino: images.cappuccinoBackground,
  };

  return (
    <Container>
      <Image source={selectBackground[coffeData.image]} />
      <BackButton />
      <BottomSheetDetails data={coffeData} />
      {/* <Button title="teste" onPress={() => console.log(coffeData.image)} /> */}
    </Container>
  );
};

export default CoffeDetails;
