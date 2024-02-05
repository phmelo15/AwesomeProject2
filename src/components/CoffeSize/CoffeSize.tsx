import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import images from '../../constants/images';
import {Colors} from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import CoffeButtonNav from '../CoffeNavBar/CoffeButtonNav/CoffeButtonNav';
import SwitchButtons from './SwitchButtons/SwitchButtons';

interface ICoffeNavBar {
  returnCoffeType: (val: string) => void;
}

const CoffeSize = ({returnCoffeType}: ICoffeNavBar) => {
  const [toggleColor, setToggleColor] = useState<string>('Small');

  const toggleColorFunction = (coffe: string) => {
    setToggleColor(coffe);
    returnCoffeType(coffe);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.CoffeSizeTitle}>Coffe Size</Text>
      <View style={styles.containerButton} testID="container">
        <SwitchButtons
          title="Small"
          onpress={() => toggleColorFunction('Small')}
          typeCoffe={toggleColor}
        />
        <SwitchButtons
          title="Medium"
          onpress={() => toggleColorFunction('Medium')}
          typeCoffe={toggleColor}
        />
        <SwitchButtons
          title="Large"
          onpress={() => toggleColorFunction('Large')}
          typeCoffe={toggleColor}
        />
      </View>
    </View>
  );
};

export default CoffeSize;
