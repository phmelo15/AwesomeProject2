import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {ContainerInput, IconFilter, Input} from './styles';
import images from '../../constants/images';

const HomeInput = () => {
  return (
    <ContainerInput testID="container">
      <Image source={images.lupaIcon} testID="lupaIcon" />
      <Input placeholder="Search Coffee..." testID="input" />
      <IconFilter source={images.iconFilter} testID="iconFilter" />
    </ContainerInput>
  );
};

export default HomeInput;
