import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors} from '../../../constants/Colors';

interface ICoffeButton {
  title: string;
  icon?: JSX.Element;
  isActive?: string;
  onpress?: () => void;
  typeCoffe?: string;
}

const CoffeButtonNav = ({title, icon, isActive, onpress, typeCoffe}: ICoffeButton) => {
  return typeCoffe === title ? (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: Colors.brown.lightBrown}}
      onPress={onpress}>
      {icon}
      <Text style={{...styles.text, color: Colors.white}}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      {icon}
      <Text style={{...styles.text, color: Colors.black}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CoffeButtonNav;
