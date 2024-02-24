import styled from 'styled-components/native';
import {Colors} from '../../../constants/Colors';

export const Container = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 40px;
  justify-content: space-between;
  flex: 1;
  background-color: ${Colors.white};
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 500;
  color: ${Colors.brown.lightBrown};
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 50px;
`;
