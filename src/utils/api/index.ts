import IUser from "@/interfaces/user";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const UserApi = {
  async register(user: IUser) {
    const data = instance.post('/signup', user);
    return data;
  },

  async login(user: IUser) {
    const data = instance.post('/signin', user);
    return data;
  }
}