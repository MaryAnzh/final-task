export interface IRegisterResp {
  _id: string,
  email: string,
  token: string
}

export interface ILoginRes {
    token: string
    user: {
      _id: string,
      email: string,
      name: string,
      image: string
    }
  }

