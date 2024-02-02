import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface IHeader {
  location?: string;
}

const Header = ({location}: IHeader) => {
  return (
    <View style={styles.container}>
      <Image source={images.profile} />
      <View style={styles.containerLocation}>
        <Image source={images.iconLocation} />
        <Text style={styles.textLocation}>{location}</Text>
      </View>
      <Image source={images.iconBell} />
      {/* <Fontisto name="bell" size={22} color="black" /> */}
    </View>
  );
};

export default Header;
