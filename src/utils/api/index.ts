import { IRegisterResp, ITokenRes } from "@/interfaces/response";
import IUser from "@/interfaces/user";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const UserApi = {
  async register(user: IUser): Promise<IRegisterResp> {
    const { data } = await instance.post<IUser,{data: IRegisterResp}>('/signup', user);
    return data;
  },

  async login(user: IUser): Promise<ITokenRes> {
    const { data } = await instance.post<IUser, {data: ITokenRes}>('/signin', user);
    return data;
  },

  async getUsers() {
    const data = instance.get('/users', {
      withCredentials: true
    });
    return data;
  }
}