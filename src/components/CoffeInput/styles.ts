import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Input = styled.TextInput`
  background-color: ${Colors.white};
  border-radius: 8px;
  padding-left: 2px;
  height: 50px;
  width: 92%;
`;

export const InputMasked = styled(TextInputMask)`
  background-color: ${Colors.white};
  border-radius: 8px;
  padding-left: 2px;
  height: 50px;
  width: 92%;
`;

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
