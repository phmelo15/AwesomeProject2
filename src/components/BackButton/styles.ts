import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: ${Colors.white};
  position: absolute;
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-top: 30px;
`;
