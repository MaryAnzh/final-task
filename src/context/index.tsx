import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import authConstants from './constance';
import { IAction, IState, initialState } from './interfaces';

export const Store = createContext<[IState, Dispatch<IAction>]>([
  initialState,
  () => {},
]);

const reducer = (state: IState, action: IAction) => {
  // console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case authConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        authorization: true,
        data: {
          ...action.payload,
        },
        loading: false,
      };
    }
    case authConstants.LOGIN_FAILURE: {
      return {
        ...state,
        authorization: false,
        data: { ...action.payload },
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export const useStore = () => useContext(Store);
