enum CollectionStatus {
  loading = 'loading',
  resolved = 'resolved',
  rejected = 'rejected',
}

interface ICollection {
  _id: string;
  title: string;
  description: string;
  topic: string;
  ownerId: string;
}

interface ICollectionsState {
  collections: ICollection[];
  status: string;
  error: string;
}

export { CollectionStatus };
export type { ICollection, ICollectionsState };
