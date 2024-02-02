import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import {IBackButton} from '../../models/commomModels';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({onpress}: IBackButton) => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onpress || goBack}>
      <AntDesign name="left" size={22} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default BackButton;
