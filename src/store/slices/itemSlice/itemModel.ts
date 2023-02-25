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

interface IItemComment {
  user: string;
  text: string;
  _id?: string;
  createdAt: number;
}

interface IItem {
  _id: string;
  title: string;
  tags: string[];
  collectionId: string;
  ownerId: string;
  likes: string[];
  comments: IItemComment[];
  createdAt: string;
  updatedAt: string;
  [key: string]: number | string | string[] | boolean | IItemComment[] | undefined;
}

interface IItemCreate {
  title: string;
  tags: string[];
  collectionId: string;
  ownerId: string;
  likes: string[];
  comments: IItemComment[];
  [key: string]: number | string | string[] | boolean | IItemComment[] | undefined;
}

interface IItemUpdate {
  title: string;
  tags: string[];
  [key: string]: number | string | string[] | boolean | IItemComment[] | undefined;
}

type NewItem = [IItemCreate, string];

type UpdatedItem = [IItemUpdate, string, string];

interface IItemsState {
  items: IItem[];
  status: string;
  error: string;
}

type ErrorPayload = PayloadAction<unknown | string>;

export { ItemStatus, CollectionErrors };
export type {
  IItem,
  IItemCreate,
  IItemUpdate,
  NewItem,
  IItemComment,
  UpdatedItem,
  IItemsState,
  ErrorPayload,
};
