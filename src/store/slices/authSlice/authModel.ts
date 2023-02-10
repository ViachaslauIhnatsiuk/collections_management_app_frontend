import { PayloadAction } from '@reduxjs/toolkit';

enum AuthStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

enum AuthErrors {
  signUp = 'User sign up error',
  signIn = 'User sign in error',
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

interface IAuthState {
  isAuth: boolean;
  currentUser: ICurrentUserState;
  status: string;
  error: string;
}

interface ISignInData {
  email: string;
  password: string;
}

interface ISignUpData extends ISignInData {
  name: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { AuthStatus, AuthErrors };
export type { ICurrentUserState, IAuthState, ISignUpData, ISignInData, ErrorPayload };
