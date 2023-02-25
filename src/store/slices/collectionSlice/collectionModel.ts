import { PayloadAction } from '@reduxjs/toolkit';
import { IExtraField } from '../../../models/componentsModels';

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

interface ICollection {
  _id?: string;
  title: string;
  description: string;
  topic: string;
  imageUrl?: string;
  ownerId: string;
  itemExtraFields: IExtraField[];
}

type UpdateCollection = [Pick<ICollection, 'title' | 'description' | 'topic'>, string];

interface ICollectionsState {
  collections: ICollection[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { CollectionStatus, CollectionErrors };
export type { ICollection, UpdateCollection, ICollectionsState, ErrorPayload };
