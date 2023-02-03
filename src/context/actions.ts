import authConstants from "./conastance";
import { TStore } from "./interfaces";

export const userRequestCreator = () => {
    console.log('i')
  return {
    type: authConstants.LOGIN_REQUEST,
  };
};

export const userLoginCreator = (user: TStore) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: user
  };
};

export const userFailCreator = () => {
  return {
    type: authConstants.LOGIN_FAILURE,
  };
};