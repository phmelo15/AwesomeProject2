import AxiosService from '../AxiosService';

const createProfileDetails = async (profileId: string, data: any) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post(`/auth/${profileId}/profiles`, data);
  return response.data;
};

const getUserProfile = async (profileId: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get(`auth/${profileId}/profiles`);
  return response.data;
};

const getUser = async (id: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get(`users/usersData/${id}`);
  return response.data;
};

const updateProfileDetails = async (profileId: string, data: any) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.put(`/auth/${profileId}/profiles`, data);
  return response.data;
};

export default {
  createProfileDetails,
  getUserProfile,
  getUser,
  updateProfileDetails,
};
