import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
    width: 150,
    height: 180,
    backgroundColor: Colors.white,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 2,
    marginRight: 20,
  },
  desc: {
    fontSize: 7,
    marginTop: 2,
    maxWidth: 100,
  },
  title: {
    fontSize: 18,
    maxWidth: 100,
  },
  price: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: '500',
  },
  containerPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default styles;
