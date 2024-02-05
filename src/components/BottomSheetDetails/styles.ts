import {Dimensions, Platform, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

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
