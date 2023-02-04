import { PayloadAction } from '@reduxjs/toolkit';
import { ItemStatus, IItemsState } from './itemModel';

const setPending = (state: IItemsState) => {
  state.status = ItemStatus.loading;
  state.error = '';
};

const setResolved = (state: IItemsState) => {
  state.status = ItemStatus.resolved;
};

const setError = (state: IItemsState, { payload }: PayloadAction<unknown | string>) => {
  state.status = ItemStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
