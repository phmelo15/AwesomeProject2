import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import {ICoffeButton} from '../../models/commomModels';

const CoffeButton = ({onPress, title, width}: ICoffeButton) => {
  return (
    <TouchableOpacity style={{...styles.button, width: width}} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <View testID="15"></View>
    </TouchableOpacity>
  );
};

export default CoffeButton;
