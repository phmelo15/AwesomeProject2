import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CoffeCard from '../../../components/CoffeCard/CoffeCard';
import CoffeNavBar from '../../../components/CoffeNavBar/CoffeNavBar';
import Header from '../../../components/Header/Header';
import UserService from '../../../services/UserService/UserService';
import {useUserState} from '../../../store/userState';
import {getMomentDay} from '../../../utils/getMomentDay';
import styles from './styles';

const HomeScreen = () => {
  const [coffeType, setCoffeType] = useState<string>('Cappuccino');
  const {user, setUser} = useUserState();
  const [greeting, setGreeting] = useState<string>('');

  const coffesList = [
    {
      type: 'Cappuccino',
      desc: 'With Chocolate',
      price: '50k',
      image: 'cappuccinoPhoto',
    },
    {
      type: 'Cappuccino',
      desc: 'With Low Fat Milk',
      price: '45k',
      image: 'coffeMilk',
    },
  ];

  const renderItem = ({item, index}: any) => <CoffeCard data={item} />;

  const getUser = async (id: string) => {
    try {
      const response = await UserService.getUser(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(user?.id);
    setGreeting(getMomentDay());
  }, []);

  return (
    <View style={styles.container}>
      <Header location="Vitoria, Brasil" />
      <Text style={styles.title}>
        {greeting}, {user?.profile?.firstname}
      </Text>
      <Text style={styles.subTitle}>Categorias</Text>

      <CoffeNavBar returnCoffeType={type => setCoffeType(type)} />
      {coffeType === 'Cappuccino' ? (
        <FlatList
          data={coffesList}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key' + index}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      ) : coffeType === 'Cold Brew' ? (
        <Text>cafe quente</Text>
      ) : (
        <Text>cafe expresso</Text>
      )}
    </View>
  );
};

export default HomeScreen;
