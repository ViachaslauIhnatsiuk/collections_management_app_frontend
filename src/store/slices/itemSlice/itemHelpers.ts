import { ItemStatus, IItemsState, ErrorPayload } from './itemModel';

const setPending = (state: IItemsState): void => {
  state.status = ItemStatus.loading;
  state.error = '';
};

const setResolved = (state: IItemsState): void => {
  state.status = ItemStatus.resolved;
};

const setError = (state: IItemsState, { payload }: ErrorPayload): void => {
  state.status = ItemStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
