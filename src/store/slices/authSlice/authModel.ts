import { PayloadAction } from '@reduxjs/toolkit';

enum AuthStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

enum AuthErrors {
  signUp = 'Sign up error',
  signIn = 'Sign in error',
}

interface ICurrentUserState {
  _id: string;
  token: string;
  name: string;
  email: string;
  isBlocked: boolean;
  isAdmin: boolean;
}

interface IAuthState {
  isAuth: boolean;
  currentUser: ICurrentUserState;
  language: 'EN' | 'RU';
  theme: 'light' | 'dark';
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
