import React from 'react';
import {ICoffeButton} from '../../models/commomModels';
import {ButtonText, Container, ContainerPrice, Price} from './styles';

const CoffeButton = ({onPress, title, width, price}: ICoffeButton) => {
  return (
    <Container price={price} width={width} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
      {price && (
        <ContainerPrice testID="15">
          <Price>R$ {price}</Price>
        </ContainerPrice>
      )}
    </Container>
  );
};

export default CoffeButton;
