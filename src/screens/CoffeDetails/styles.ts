import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').height / 2}px;
`;
