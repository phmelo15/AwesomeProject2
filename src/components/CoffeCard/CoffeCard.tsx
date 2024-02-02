import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from '../../constants/Colors';
import {ICoffeCard} from '../../models/commomModels';

const CoffeCard = ({data}: ICoffeCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={images[data.image]}
        style={{alignSelf: 'center', borderRadius: 14}}
        testID="Image"
      />
      <Text style={styles.title}>{data.type}</Text>
      <Text style={styles.desc}>{data.desc}</Text>
      <View style={styles.containerPayment} testID="payment">
        <Text style={styles.price}>{data.price}</Text>
        <FontAwesome6 name="circle-plus" size={26} color={Colors.brown} testID="icon" />
      </View>
    </TouchableOpacity>
  );
};

export default CoffeCard;
