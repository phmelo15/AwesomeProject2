import styled, {css} from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const ContainerPrice = styled.View`
  border-left-width: 1px;
  width: 25%;
  border-color: ${Colors.white};
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
`;

export const Container = styled.TouchableOpacity<{
  price?: number;
  width?: string;
  onPress: () => void;
}>`
  ${props =>
    props.price &&
    css`
      flex-direction: row;
      justify-content: space-evenly;
    `}
  height: 60px;
  width: ${props => props.width};
  align-self: center;
  background-color: ${Colors.brown.darkBrown};
  border-radius: 50px;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
`;
