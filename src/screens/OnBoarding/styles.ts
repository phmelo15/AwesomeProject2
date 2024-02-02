import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    maxWidth: 160,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    maxWidth: 180,
    alignSelf: 'center',
    marginTop: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardOnBoarding: {
    marginBottom: 70,
    width: '100%',
  },
  button: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#846046',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
