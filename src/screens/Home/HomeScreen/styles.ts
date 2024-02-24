import {styled} from 'styled-components/native';
import {Colors} from '../../../constants/Colors';

export const Container = styled.View`
  padding-vertical: 45px;
  padding-horizontal: 30px;
  background-color: ${Colors.white};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${Colors.black};
  font-weight: 500;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 22px;
  color: ${Colors.black};
  font-weight: 500;
  margin-top: 25px;
`;
