import React from 'react';
import {Image} from 'react-native';
import images from '../../constants/images';
import {Container, ContainerLocation, TextLocation} from './styles';

interface IHeader {
  location?: string;
}

const Header = ({location}: IHeader) => {
  return (
    <Container>
      <Image source={images.profile} />
      <ContainerLocation>
        <Image source={images.iconLocation} />
        <TextLocation>{location}</TextLocation>
      </ContainerLocation>
      <Image source={images.iconBell} />
    </Container>
  );
};

export default Header;
