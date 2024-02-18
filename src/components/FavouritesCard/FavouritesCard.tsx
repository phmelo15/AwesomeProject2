import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from '../../constants/Colors';
import images, {ImagesType} from '../../constants/images';
import {ICoffeCard} from '../../models/commomModels';
import styles from './styles';

const FavouritesCard = ({data, onpress}: ICoffeCard) => {
  const imageKey = data.image as keyof ImagesType;

  const [favoriteSent, setFavoriteSent] = useState<boolean>(false);

  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <Image
        source={images[imageKey]}
        style={{alignSelf: 'center', borderRadius: 14}}
        testID="Image"
      />
      <Text style={styles.title} numberOfLines={1}>
        {data.name}
      </Text>
      <Text style={styles.desc} numberOfLines={1}>
        {data.description}
      </Text>
      <View style={styles.containerPayment} testID="payment">
        <Text style={styles.price}>{`R$ ${data.price}`}</Text>
        <TouchableOpacity onPress={() => setFavoriteSent(true)}>
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
      </View>
    </TouchableOpacity>
  );
};

export default FavouritesCard;
