import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: Colors.brown.lightBrown,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    marginTop: 20,
    borderRadius: 8,
    paddingLeft: 20,
    height: 50,
  },
  inputContainer: {
    marginTop: 50,
  },
});

export default styles;
