import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
  padding-horizontal: 5px;
  width: 150px;
  height: 180px;
  background-color: ${Colors.white};
  padding-vertical: 5px;
  border-radius: 8px;
  box-shadow: 1px 1px 1.5px ${Colors.lightGray};
  elevation: 5;
  margin-right: 20px;
  margin-vertical: 10px;
`;

export const Description = styled.Text`
  font-size: 7px;
  margin-top: 2px;
  max-width: 100px;
`;

export const Title = styled.Text`
  font-size: 18px;
  max-width: 100px;
`;
export const PriceText = styled.Text`
  font-size: 18px;
  margin-top: 5px;
  font-weight: 500;
`;

export const PaymentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CoffeImage = styled.Image`
  align-self: center;
  border-radius: 14px;
`;
