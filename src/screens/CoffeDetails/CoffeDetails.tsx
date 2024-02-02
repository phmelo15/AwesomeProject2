import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import styles from './styles';
import BottomSheetDetails from '../../components/BottomSheetDetails/BottomSheetDetails';
import BackButton from '../../components/BackButton/BackButton';

const CoffeDetails = () => {
  return (
    <View style={styles.container}>
      <Image source={images.cappuccinoBackground} style={styles.image} />
      <BackButton />
      <View style={styles.containerDescription}>
        <BottomSheetDetails />
      </View>
    </View>
  );
};

export default CoffeDetails;
