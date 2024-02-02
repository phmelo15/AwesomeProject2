import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import styles from './styles';

interface IHeaderBack {
  onPress: () => void;
  hasTitle?: boolean;
}

const HeaderBack = ({onPress, hasTitle}: IHeaderBack) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="arrowleft" size={26} color={Colors.gray} />
      {hasTitle && <Text style={styles.text}>Voltar</Text>}
    </TouchableOpacity>
  );
};

export default HeaderBack;
