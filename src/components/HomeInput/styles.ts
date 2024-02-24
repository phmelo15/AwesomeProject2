import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const Input = styled.TextInput`
  border-radius: 50px;
  height: 50px;
  flex-grow: 1;
  margin-left: 10px;
`;

export const ContainerInput = styled.View`
  background-color: ${Colors.white};
  border-width: 1px;
  border-color: ${Colors.lightGray};
  height: 50px;
  margin-top: 20px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
`;

export const IconFilter = styled.Image`
  margin-right: 5px;
`;
