import { PayloadAction } from '@reduxjs/toolkit';

enum CollectionStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

enum CollectionErrors {
  get = 'Сollections request error',
  create = 'Сollection creation error',
  update = 'Сollection update error',
  delete = 'Сollection removal error',
}

interface IItemExtraFields {
  name: string;
  type: string;
}

interface ICollection {
  _id?: string;
  title: string;
  description: string;
  topic: string;
  ownerId: string;
  itemExtraFields: IItemExtraFields[];
}

interface IUpdateCollection {
  title: string;
  description: string;
  topic: string;
}

interface ICollectionsState {
  collections: ICollection[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { CollectionStatus, CollectionErrors };
export type { ICollection, IUpdateCollection, ICollectionsState, ErrorPayload };
