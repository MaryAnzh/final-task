export type TStore = {
  [key: string | number]: string | null | undefined;
};

export type Error = {
  error: string;
};

export interface IState {
  authorization: boolean;
  loading: boolean;
  data: TStore | Error;
}

export const initialState: IState = {
  authorization: false,
  loading: false,
  data: {},
};

export interface IAction {
  type: string;
  payload?: TStore;
}
