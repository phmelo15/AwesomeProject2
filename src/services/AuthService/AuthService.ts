import AxiosService from '../AxiosService';

const login = async (username: string, password: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post('/auth/login', {
    username: username,
    password: password,
  });
  return response.data;
};

const createUser = async (username: string, password: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post('/auth', {
    username: username,
    password: password,
  });
  return response.data;
};

const deleteUser = async (id: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.delete(`/auth/${id}`);
  return response.data;
};

export default {
  login,
  createUser,
  deleteUser,
};
