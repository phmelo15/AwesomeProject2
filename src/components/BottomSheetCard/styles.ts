import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.translucid,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  divisor: {
    height: '100%',
    width: 1,
    borderLeftWidth: 1,
    borderColor: Colors.black,
  },
  title: {
    fontWeight: '500',
    color: Colors.black,
  },
});

export default styles;
