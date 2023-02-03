import { PayloadAction } from '@reduxjs/toolkit';
import { IUserState, UserStatus } from './userModel';

const setPending = (state: IUserState) => {
  state.status = UserStatus.loading;
  state.error = '';
};

const setResolved = (state: IUserState) => {
  state.status = UserStatus.resolved;
};

const setError = (state: IUserState, { payload }: PayloadAction<unknown | string>) => {
  state.status = UserStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
