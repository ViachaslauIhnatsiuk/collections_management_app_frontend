import { ErrorPayload, IAuthState, AuthStatus } from './authModel';

const setPending = (state: IAuthState): void => {
  state.status = AuthStatus.loading;
  state.error = '';
};

const setResolved = (state: IAuthState): void => {
  state.status = AuthStatus.resolved;
};

const setError = (state: IAuthState, { payload }: ErrorPayload): void => {
  state.status = AuthStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
