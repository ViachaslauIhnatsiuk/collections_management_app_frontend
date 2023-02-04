enum ItemStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
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

export { ItemStatus };
export type { IItem, INewItem, IItemsState };
