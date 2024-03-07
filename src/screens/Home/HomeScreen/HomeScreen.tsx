import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, RefreshControl} from 'react-native';
import CoffeCard from '../../../components/CoffeCard/CoffeCard';
import CoffeNavBar from '../../../components/CoffeNavBar/CoffeNavBar';
import Header from '../../../components/Header/Header';
import HomeInput from '../../../components/HomeInput/HomeInput';
import {ICoffeInfo} from '../../../models/coffeModels';
import {HomeRoutes} from '../../../navigation/HomeStackScreen/HomeStackScreen.routes';
import {StackTypes} from '../../../navigation/StackNavigation/routes.types';
import CoffeService from '../../../services/CoffeService/CoffeService';
import FavoritesService from '../../../services/FavoritesService/FavoritesService';
import UserService from '../../../services/UserService/UserService';
import {useUserState} from '../../../store/userState';
import {getMomentDay} from '../../../utils/getMomentDay';
import {Container, Subtitle, Title} from './styles';
import {Colors} from '../../../constants/Colors';

const HomeScreen = () => {
  const {navigate} = useNavigation<StackTypes>();
  const [coffeType, setCoffeType] = useState<string>('Cappuccino');
  const [greeting, setGreeting] = useState<string>('');
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);
  const [favoriteList, setFavoriteList] = useState<number[]>([]);
  const {user, setUser} = useUserState();
  const [loading, setLoading] = useState<boolean>(false);

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

  const deleteFavorite = async (id: any) => {
    try {
      const response = await FavoritesService.deleteFavorite(id, parseInt(user?.id));
      getFavorites();
    } catch (error) {
      console.error(error);
    }
  };

  const createFavorite = async (id: any) => {
    try {
      const response = await FavoritesService.postFavorite(id, parseInt(user?.id));
      getFavorites();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigateToDetailsCard = (data: ICoffeInfo) => {
    navigate(HomeRoutes.COFFEDETAILS, {data: data});
  };

  const renderItem: ListRenderItem<ICoffeInfo> = ({item, index}) => {
    if (coffeType === item?.type) {
      return (
        <>
          {loading ? (
            <ActivityIndicator color={Colors.brown.lightBrown} size={22} />
          ) : (
            <CoffeCard
              data={item}
              onpress={() => handleNavigateToDetailsCard(item)}
              isFavorite={favoriteList.includes(item.id)}
              updateCoffe={() => {
                favoriteList.includes(item.id)
                  ? deleteFavorite(item.id)
                  : createFavorite(item.id);
              }}
            />
          )}
        </>
      );
    } else {
      return <></>;
    }
  };

  const getFavorites = async () => {
    setLoading(true);
    try {
      const response = await FavoritesService.getFavorites(parseInt(user?.id));
      const justCoffeId = response.map((item: any) => {
        return item.coffeId.toString();
      });
      getAllCafes();
      setFavoriteList(justCoffeId);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, []),
  );

  useEffect(() => {
    getUser(user?.id);
    setGreeting(getMomentDay());
  }, []);

  return (
    <Container>
      <Header location="Vitoria, Brasil" />
      <Title>
        {greeting}
        {user?.profile?.firstname && `, ${user?.profile?.firstname}`}
      </Title>
      <Subtitle>Categories</Subtitle>
      <HomeInput />
      <CoffeNavBar returnCoffeType={type => setCoffeType(type)} />
      <FlatList
        data={coffeInfo}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        refreshControl={<RefreshControl refreshing={loading} onRefresh={getFavorites} />}
      />
    </Container>
  );
};

export default HomeScreen;
