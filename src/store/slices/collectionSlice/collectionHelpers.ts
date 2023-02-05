import { CollectionStatus, ErrorPayload, ICollectionsState } from './collectionModel';

const setPending = (state: ICollectionsState): void => {
  state.status = CollectionStatus.loading;
  state.error = '';
};

const setResolved = (state: ICollectionsState): void => {
  state.status = CollectionStatus.resolved;
};

const setError = (state: ICollectionsState, { payload }: ErrorPayload): void => {
  state.status = CollectionStatus.rejected;
  state.error = payload as string;
};

export { setPending, setResolved, setError };
