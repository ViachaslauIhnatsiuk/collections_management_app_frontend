import { PayloadAction } from '@reduxjs/toolkit';

enum ItemStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

enum CollectionErrors {
  get = 'Items request error',
  create = 'Item creation error',
  update = 'Item update error',
  delete = 'Item removal error',
}

interface IItemComments {
  user: string;
  text: string;
}

interface IItem {
  _id?: string;
  title: string;
  tags: string[];
  collectionId: string;
  ownerId: string;
  comments: IItemComments[];
}

interface INewItem {
  collectionId: string;
  newItem: IItem;
}

interface IItemsState {
  items: IItem[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { ItemStatus, CollectionErrors };
export type { IItem, INewItem, IItemsState, ErrorPayload };
