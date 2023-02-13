import authConstants from './constance';
import { TStore } from './interfaces';

export const userRequestCreator = () => {
  return {
    type: authConstants.LOGIN_REQUEST,
  };
};

export const userLoginCreator = (user: TStore) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: user,
  };
};

export const userFailCreator = () => {
  return {
    type: authConstants.LOGIN_FAILURE,
  };
};
