import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images, {ImagesType} from '../../constants/images';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from '../../constants/Colors';
import {ICoffeCard} from '../../models/commomModels';

const CoffeCard = ({data, onpress}: ICoffeCard) => {
  const imageKey = data.image as keyof ImagesType;

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
        <FontAwesome6
          name="circle-plus"
          size={26}
          color={Colors.brown.lightBrown}
          testID="icon"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CoffeCard;
