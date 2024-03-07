import AxiosService from '../AxiosService';

const getCart = async () => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get('cart');
  return response.data;
};

const createCart = async (id: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post(`cart/${id}`);
  return response.data;
};

const deleteCart = async (id: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.delete(`cart/${id}`);
  return response.data;
};

export default {
  getCart,
  createCart,
  deleteCart,
};
