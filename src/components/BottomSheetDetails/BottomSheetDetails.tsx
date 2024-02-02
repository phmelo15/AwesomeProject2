import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import BottomSheetCard from '../BottomSheetCard/BottomSheetCard';

const BottomSheetDetails = () => {
  return (
    <View style={styles.container}>
      <BottomSheetCard />
    </View>
  );
};

export default BottomSheetDetails;
