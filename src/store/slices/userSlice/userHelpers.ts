import { ErrorPayload, IUserState, UserStatus } from './userModel';

const setPending = (state: IUserState): void => {
  state.status = UserStatus.loading;
  state.error = '';
};

const setResolved = (state: IUserState): void => {
  state.status = UserStatus.resolved;
};

const setError = (state: IUserState, { payload }: ErrorPayload): void => {
  state.status = UserStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
