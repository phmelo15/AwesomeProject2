import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 20,
  },
  containerInput: {},
});

export default styles;
