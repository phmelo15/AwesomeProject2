import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLocation = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TextLocation = styled.Text`
  font-size: 12px;
  color: ${Colors.black};
  font-weight: bold;
`;
