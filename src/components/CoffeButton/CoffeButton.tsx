import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ICoffeButton} from '../../models/commomModels';
import styles from './styles';

const CoffeButton = ({onPress, title, width, price}: ICoffeButton) => {
  return (
    <TouchableOpacity
      style={
        price ? {...styles.buttonPrice, width: width} : {...styles.button, width: width}
      }
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {price && (
        <View testID="15" style={styles.containerPrice}>
          <Text style={styles.price}>R$ {price}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CoffeButton;
