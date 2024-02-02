import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../constants/images';

const HomeInput = () => {
  return (
    <View style={styles.containerInput} testID="container">
      <Image source={images.lupaIcon} testID="lupaIcon" />
      <TextInput placeholder="Search Coffee..." style={styles.input} testID="input" />
      <Image source={images.iconFilter} style={styles.iconFilter} testID="iconFilter" />
    </View>
  );
};

export default HomeInput;
