import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  container: {
    width: '100%',
    marginTop: 5,
  },
  CoffeSizeTitle: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: '500',
    marginTop: 20,
  },
});

export default styles;
