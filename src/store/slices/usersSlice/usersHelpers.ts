import { ErrorPayload, IUsersState, UsersStatus } from './usersModel';

const setPending = (state: IUsersState): void => {
  state.status = UsersStatus.loading;
  state.error = '';
};

const setResolved = (state: IUsersState): void => {
  state.status = UsersStatus.resolved;
};

const setError = (state: IUsersState, { payload }: ErrorPayload): void => {
  state.status = UsersStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
