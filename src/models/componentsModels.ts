interface IUserForm {
  name: string;
  email: string;
  password: string;
}

type CollectionFormType = 'title' | 'description' | 'topic';

interface ICollectionForm {
  title: string;
  description: string;
  topic: string;
}

export type { IUserForm, CollectionFormType, ICollectionForm };
