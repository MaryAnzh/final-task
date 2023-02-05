import { IRegisterResp, ILoginRes } from '@/interfaces/response';
import IUser from '@/interfaces/user';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const UserApi = {
  async register(user: IUser): Promise<IRegisterResp> {
    const { data } = await instance.post<IUser,{data: IRegisterResp}>('/signup', user);
    return data;
  },

  async login(user: IUser): Promise<ILoginRes> {
    const { data } = await instance.post<IUser, {data: ILoginRes}>('/signin', user);
    return data;
  },

  async getUsers() {
    const data = instance.get('/users', {
      withCredentials: true
    });
    return data;
  }
}