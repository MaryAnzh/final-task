
export type TStore = {
  [key: string|number]: string|null|undefined
};

export type Error = {
  error: string
}

export interface IState {
  loading: boolean;
  data: TStore|Error
}

export const initialState: IState = {
  loading: false,
  data: {}
 }

export interface IAction {
  type: string,
  payload?: TStore;
}

