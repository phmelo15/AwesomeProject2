import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, FlatList, ListRenderItem, RefreshControl} from 'react-native';
import CoffeCard from '../../components/CoffeCard/CoffeCard';
import {ICoffeInfo} from '../../models/coffeModels';
import {HomeRoutes} from '../../navigation/HomeStackScreen/HomeStackScreen.routes';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import CoffeService from '../../services/CoffeService/CoffeService';
import FavoritesService from '../../services/FavoritesService/FavoritesService';
import {useUserState} from '../../store/userState';
import {Container, ActivityIndicator} from './styles';
import {Colors} from '../../constants/Colors';

const Favourites = () => {
  const {navigate} = useNavigation<StackTypes>();
  const {user} = useUserState();
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFavourites = async () => {
    setLoading(true);
    try {
      const response = await FavoritesService.getFavorites(parseInt(user.id));
      const responseCoffe = response.map((item: any) => {
        return item.coffeId;
      });

      getAllCafes(responseCoffe);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const deleteFavorite = async (id: any) => {
    try {
      const response = await FavoritesService.deleteFavorite(id, parseInt(user?.id));
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCafes = async favorites => {
    try {
      const response = await CoffeService.getAllCafes();
      const filtered = response.filter((item: any) => favorites.includes(item.id));
      setCoffeInfo(filtered);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigateToDetailsCard = (data: ICoffeInfo) => {
    navigate(HomeRoutes.COFFEDETAILS, {data: data});
  };

  const renderItem: ListRenderItem<ICoffeInfo> = ({
    item,
    index,
  }: {
    item: ICoffeInfo;
    index: number;
  }) => {
    return (
      <CoffeCard
        data={item}
        onpress={() => handleNavigateToDetailsCard(item)}
        isFavorite
        updateCoffe={() => {
          deleteFavorite(item.id);
        }}
      />
    );
  };

  useFocusEffect(
    useCallback(() => {
      getFavourites();
    }, []),
  );

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={Colors.brown.lightBrown} size={22} />
      ) : (
        <FlatList
          data={coffeInfo}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => 'key' + index}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getFavourites} />
          }
        />
      )}
    </Container>
  );
};

export default Favourites;
