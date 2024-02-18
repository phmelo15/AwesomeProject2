import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
    width: '80%',
    height: 180,
    backgroundColor: Colors.white,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 2,

    marginVertical: 10,
  },
  desc: {
    fontSize: 7,
    marginTop: 2,
    maxWidth: 200,
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
