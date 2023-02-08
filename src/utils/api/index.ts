import axios from 'axios';

import { RoutingEnum } from '@/data/constants/routing';

import { ILoginRes, IRegisterResp } from '@/interfaces/response';
import IUser from '@/interfaces/user';

const instance = axios.create({
  baseURL: RoutingEnum.baseUrl2,
});

export const UserApi = {
  async register(user: IUser): Promise<IRegisterResp> {
    const { data } = await instance.post<IUser, { data: IRegisterResp }>(
      '/signup',
      user,
    );
    return data;
  },

  async login(user: IUser): Promise<ILoginRes> {
    const { data } = await instance.post<IUser, { data: ILoginRes }>(
      '/signin',
      user,
    );
    return data;
  },

  async getUsers() {
    const data = instance.get('/users', {
      withCredentials: true,
    });
    return data;
  },
};
