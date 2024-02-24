import {Dimensions, Platform, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';

export const DragHandle = styled.View`
  width: 40px;
  height: 4px;
  background-color: ${Colors.lightGray};
  border-radius: 10px;
  align-self: center;
  margin-top: 10px;
`;

export const TitleAbout = styled.Text`
  font-size: 20px;
  color: ${Colors.black};
  margin-vertical: 10px;
  margin-top: 30px;
  font-weight: 300;
`;

export const ButtonContainer = styled.View`
  margin-top: 100px;
`;

export const Description = styled.Text`
  font-size: 11px;
  color: ${Colors.black};
  font-weight: 300;
`;

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    backgroundColor: Colors.white,
    height: 550,
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom:
      Dimensions.get('window').height * 0.1 - Dimensions.get('window').height * 0.45,
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  titleAbout: {
    fontSize: 20,
    color: Colors.black,
    marginVertical: 10,
    marginTop: 30,
    fontWeight: '500',
  },
  description: {
    fontSize: 11,
    color: Colors.black,
    fontWeight: '300',
  },
  buttonContainer: {
    marginTop: 100,
  },
});

export default styles;
