import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  button: {
    height: 60,
    alignSelf: 'center',
    backgroundColor: Colors.brown.darkBrown,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  containerPrice: {
    borderLeftWidth: 1,
    width: '25%',
    borderColor: Colors.white,
    alignItems: 'center',
  },
  buttonPrice: {
    height: 60,
    alignSelf: 'center',
    backgroundColor: Colors.brown.darkBrown,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  price: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
