interface ICurrentUserState {
  _id: string;
  token: string;
  name: string;
  email: string;
  password: string;
  isBlocked: boolean;
  isAdmin: boolean;
  language: string;
  theme: string;
}

interface IUserState {
  isAuth: boolean;
  currentUser: ICurrentUserState;
}

export type { ICurrentUserState, IUserState };
