import {useNavigation} from '@react-navigation/native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import {IBackButton} from '../../models/commomModels';
import {Container} from './styles';

const BackButton = ({onpress}: IBackButton) => {
  const {goBack} = useNavigation();

  return (
    <Container onPress={onpress || goBack}>
      <AntDesign name="left" size={22} color={Colors.black} />
    </Container>
  );
};

export default BackButton;
