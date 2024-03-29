import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {width: '100%', height: Dimensions.get('window').height / 2},
  containerDescription: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  CoffeDetailsContainer: {
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    backgroundColor: Colors.white,
    height: Dimensions.get('window').height / 2,
    width: '100%',
  },
});

export default styles;
