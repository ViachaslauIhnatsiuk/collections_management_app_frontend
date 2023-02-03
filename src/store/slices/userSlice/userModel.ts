enum UserStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

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
  status: string;
  error: string;
}

interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

interface ISignInData {
  email: string;
  password: string;
}

export { UserStatus };
export type { ICurrentUserState, IUserState, ISignUpData, ISignInData };
