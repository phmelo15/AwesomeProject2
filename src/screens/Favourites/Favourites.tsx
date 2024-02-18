import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import CoffeCard from '../../components/CoffeCard/CoffeCard';
import {ICoffeInfo} from '../../models/coffeModels';
import {HomeRoutes} from '../../navigation/HomeStackScreen/HomeStackScreen.routes';
import {StackTypes} from '../../navigation/StackNavigation/routes.types';
import CoffeService from '../../services/CoffeService/CoffeService';
import FavoritesService from '../../services/FavoritesService/FavoritesService';
import {useUserState} from '../../store/userState';
import styles from './styles';

const Favourites = () => {
  const [favouritesList, setFavouritesList] = useState([]);
  const {navigate} = useNavigation<StackTypes>();
  const {user} = useUserState();
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);

  const getFavourites = async () => {
    try {
      const response = await FavoritesService.getFavorites(user.id);
      const responseCoffe = response.map((item: any) => {
        return item.coffeId;
      });
      setFavouritesList(responseCoffe);
      getAllCafes(responseCoffe);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFavorite = async (id: any) => {
    try {
      const response = await FavoritesService.deleteFavorite(id);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCafes = async favorites => {
    try {
      const response = await CoffeService.getAllCafes();
      const filtered = response.filter((item: any) =>
        favorites.includes(parseInt(item.id)),
      );
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

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={coffeInfo}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

export default Favourites;
