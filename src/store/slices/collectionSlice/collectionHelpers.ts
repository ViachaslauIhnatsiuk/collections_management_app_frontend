import { PayloadAction } from '@reduxjs/toolkit';
import { CollectionStatus, ICollectionsState } from './collectionModel';

const setPending = (state: ICollectionsState) => {
  state.status = CollectionStatus.loading;
  state.error = '';
};

const setResolved = (state: ICollectionsState) => {
  state.status = CollectionStatus.resolved;
};

const setError = (
  state: ICollectionsState,
  { payload }: PayloadAction<unknown | string>,
) => {
  state.status = CollectionStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
