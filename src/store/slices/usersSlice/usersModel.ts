import { PayloadAction } from '@reduxjs/toolkit';

enum UsersStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

enum UsersErrors {
  get = 'Users request error',
  update = 'User update error',
  delete = 'User removal error',
}

interface IUser {
  _id: string;
  token: string;
  name: string;
  email: string;
  isBlocked: boolean;
  isAdmin: boolean;
  language: string;
  theme: string;
}

interface IUsersState {
  users: IUser[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { UsersStatus, UsersErrors };
export type { IUser, IUsersState, ErrorPayload };
