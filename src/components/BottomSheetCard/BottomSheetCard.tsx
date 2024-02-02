import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const BottomSheetCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'\u2615\uFE0F'} Coffe</Text>
      <View style={styles.divisor} />
      <Text style={styles.title}>{'🍫'} Chocolate</Text>
      <View style={styles.divisor} />
      <Text style={styles.title}>Medium Roasted</Text>
    </View>
  );
};

export default BottomSheetCard;
