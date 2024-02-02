import Axios, {AxiosRequestConfig} from 'axios';

interface UserData {
  state: {
    token: string;
  };
  version: number;
}

const createAxiosInstance = async () => {
  let config: AxiosRequestConfig = {
    baseURL: 'http://192.168.0.5:3000',
    timeout: 10000,
  };

  const instance = Axios.create(config);

  // const token = await AsyncStorage.getItem('token');

  // try {
  //   const objUser = await AsyncStorage.getItem('awesome@user');
  //   const userData: UserData = JSON.parse(objUser);
  //   const {token} = userData.state;

  //   if (token) {
  //     instance.interceptors.request.use(value => {
  //       value.headers.Authorization = `Bearer ${token}`;
  //       return value;
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return instance;
};

export default {
  createAxiosInstance,
};
