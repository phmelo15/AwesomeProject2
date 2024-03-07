import {ICoffeInfo} from '../../models/coffeModels';
import AxiosService from '../AxiosService';

const getFavorites = async (id: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get(`favorites/${id}`);
  return response.data;
};

const postFavorite = async (id: string, userId: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post(`favorites/${id}/${userId}`);
  return response.data;
};

const deleteFavorite = async (id: string, userId: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.delete(`favorites/${id}/${userId}`);
  return response.data;
};

const putFavorite = async (
  id: number,
  favoriteId: number,
  updateFavoriteDetails: ICoffeInfo,
) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.put(
    `favorites/${id}/${favoriteId}`,
    updateFavoriteDetails,
  );
  return response.data;
};

export default {
  getFavorites,
  postFavorite,
  putFavorite,
  deleteFavorite,
};
