import AxiosService from '../AxiosService';

const getAllCafes = async () => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get('/coffe');
  return response.data;
};

export default {
  getAllCafes,
};
