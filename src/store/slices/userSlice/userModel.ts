interface ICurrentUserState {
  id: string;
  token: string;
  name: string;
  email: string;
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
