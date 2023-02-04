enum CollectionStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
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

export { CollectionStatus };
export type { ICollection, IUpdateCollection, ICollectionsState };
