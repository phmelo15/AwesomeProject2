import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
    marginTop: 25,
  },
  specialOffer: {
    fontSize: 24,
    color: Colors.black,
    marginTop: 20,
  },
});
export default styles;
