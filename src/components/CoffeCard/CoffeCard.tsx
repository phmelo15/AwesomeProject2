import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from '../../constants/Colors';
import images, {ImagesType} from '../../constants/images';
import {ICoffeCard} from '../../models/commomModels';
import {
  CoffeImage,
  Container,
  Description,
  PaymentContainer,
  PriceText,
  Title,
} from './styles';

const CoffeCard = ({data, onpress, isFavorite, updateCoffe}: ICoffeCard) => {
  const imageKey = data?.image as keyof ImagesType;

  const [favoriteSent, setFavoriteSent] = useState<boolean>(isFavorite);

  return (
    <Container onPress={onpress}>
      <CoffeImage source={images[imageKey]} testID="Image" />
      <Title numberOfLines={1}>{data?.name}</Title>
      <Description numberOfLines={1}>{data?.description}</Description>
      <PaymentContainer testID="payment">
        <PriceText>{`R$ ${data?.price}`}</PriceText>
        <TouchableOpacity
          onPress={() => {
            updateCoffe();
            setFavoriteSent(!favoriteSent);
          }}>
          {favoriteSent ? (
            <FontAwesome6
              name="circle-check"
              size={26}
              color={Colors.brown.lightBrown}
              testID="icon"
            />
          ) : (
            <FontAwesome6
              name="circle-plus"
              size={26}
              color={Colors.brown.lightBrown}
              testID="icon"
            />
          )}
        </TouchableOpacity>
      </PaymentContainer>
    </Container>
  );
};

export default CoffeCard;
