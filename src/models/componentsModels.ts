interface IUserForm {
  name: string;
  email: string;
  password: string;
}

type CollectionFormType = 'user' | 'title' | 'description' | 'topic';

interface ICollectionForm {
  user: string;
  title: string;
  description: string;
  topic: string;
}

interface ICollectionExtraFieldForm {
  name: string;
  type: string;
}

interface ITableHeaderTitles {
  id: string;
  label: string;
  minWidth: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

interface IExtraField {
  id?: string;
  name: string;
  type: string;
}

export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  ICollectionExtraFieldForm,
  ITableHeaderTitles,
  IExtraField,
};
