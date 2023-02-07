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
  [key: string]: number | string | string[] | boolean | IItemComments[];
}

type NewItem = [IItem, string];

type UpdatedItem = [IItem, string, string];

interface IItemsState {
  items: IItem[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { ItemStatus, CollectionErrors };
export type { IItem, NewItem, IItemComments, UpdatedItem, IItemsState, ErrorPayload };
