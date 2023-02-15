import axios from 'axios';



import IFeedback from '@/interfaces/feedback';
import { ILoginRes, IRegisterResp } from '@/interfaces/response';
import IUser from '@/interfaces/user';
import { RoutingEnum } from '@/data/constants/routing';


const instance = axios.create({
  baseURL: RoutingEnum.serverDeploy,
});

export const UserApi = {
  async register(user: IUser): Promise<IRegisterResp> {
    const { data } = await instance.post<IUser, { data: IRegisterResp }>(
      '/signup',
      user,
    );
    return data;
  },

  async login(user: { email: string; password: string }): Promise<ILoginRes> {
    const { data } = await instance.post<
      { email: string; password: string },
      { data: ILoginRes }
    >('/signin', user);
    return data;
  },

  async getUsers() {
    const data = instance.get('/users', {
      withCredentials: true,
    });
    return data;
  },
};

export const FeedbackApi = {
  async getAllFeedbacks() {
    const data = await instance.get<IFeedback[]>('/feedbacks');
    return data;
  },
};