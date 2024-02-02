import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CoffeButton from './CoffeButtonNav/CoffeButtonNav';
import images from '../../constants/images';
import {Colors} from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

interface ICoffeNavBar {
  returnCoffeType: (val: string) => void;
}

const CoffeNavBar = ({returnCoffeType}: ICoffeNavBar) => {
  const [toggleColor, setToggleColor] = useState<string>('Cappuccino');

  const toggleColorFunction = (coffe: string) => {
    setToggleColor(coffe);
    returnCoffeType(coffe);
  };

  return (
    <View style={styles.container} testID="container">
      <CoffeButton
        title="Cappuccino"
        icon={
          <Image
            source={images.iconCappuccino}
            style={
              toggleColor === 'Cappuccino'
                ? {tintColor: Colors.white}
                : {tintColor: Colors.black}
            }
          />
        }
        onpress={() => toggleColorFunction('Cappuccino')}
        typeCoffe={toggleColor}
      />
      <CoffeButton
        title="Cold Brew"
        onpress={() => toggleColorFunction('Cold Brew')}
        typeCoffe={toggleColor}
        icon={
          <Entypo
            name="cup"
            color={toggleColor === 'Cold Brew' ? Colors.white : Colors.black}
            size={22}
          />
        }
      />
      <CoffeButton
        title="Expresso"
        onpress={() => toggleColorFunction('Expresso')}
        typeCoffe={toggleColor}
        icon={
          <Feather
            name="coffee"
            color={toggleColor === 'Expresso' ? Colors.white : Colors.black}
            size={22}
          />
        }
      />
    </View>
  );
};

export default CoffeNavBar;
