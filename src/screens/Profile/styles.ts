import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  padding-horizontal: 20px;
  padding-vertical: 40px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${Colors.black};
  font-weight: 500;
`;

export const Photo = styled(FontAwesome)`
  margin-top: 60px;
  align-self: center;
`;

export const ContainerOptions = styled.View`
  margin-top: 50px;
`;

export const TextOptions = styled.Text`
  font-size: 18px;
  color: ${Colors.gray};
`;

export const ButtonText = styled.TouchableOpacity`
  padding-vertical: 10px;
`;
