import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import CoffeCard from '../../../components/CoffeCard/CoffeCard';
import CoffeNavBar from '../../../components/CoffeNavBar/CoffeNavBar';
import Header from '../../../components/Header/Header';
import HomeInput from '../../../components/HomeInput/HomeInput';
import {ICoffeInfo} from '../../../models/coffeModels';
import CoffeService from '../../../services/CoffeService/CoffeService';
import UserService from '../../../services/UserService/UserService';
import {useUserState} from '../../../store/userState';
import {getMomentDay} from '../../../utils/getMomentDay';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const [coffeType, setCoffeType] = useState<string>('Cappuccino');
  const [greeting, setGreeting] = useState<string>('');
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);
  const {user, setUser} = useUserState();

  const getAllCafes = async () => {
    try {
      const response = await CoffeService.getAllCafes();
      setCoffeInfo(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (id: string) => {
    try {
      const response = await UserService.getUser(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateToDetailsCard = () => {
    navigate('CoffeDetails');
  };

  const renderItem: ListRenderItem<ICoffeInfo> = ({
    item,
    index,
  }: {
    item: ICoffeInfo;
    index: number;
  }) => {
    if (coffeType === item?.type) {
      return <CoffeCard data={item} onpress={handleNavigateToDetailsCard} />;
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    getAllCafes();
  }, []);

  useEffect(() => {
    getUser(user?.id);
    setGreeting(getMomentDay());
  }, []);

  return (
    <View style={styles.container}>
      <Header location="Vitoria, Brasil" />
      <Text style={styles.title}>
        {greeting}
        {user?.profile?.firstname && `, ${user?.profile?.firstname}`}
      </Text>
      <Text style={styles.subTitle}>Categorias</Text>
      <HomeInput />

      <CoffeNavBar returnCoffeType={type => setCoffeType(type)} />

      <FlatList
        data={coffeInfo}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default HomeScreen;
