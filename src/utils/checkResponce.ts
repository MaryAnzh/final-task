import { AxiosResponse } from "axios";

export default function checkResponce(res: AxiosResponse) {
  if(res.request.status === 200) {
    return res.data
  }
  return Promise.reject(`Ошибка при запросе: ${res.status}`);
}