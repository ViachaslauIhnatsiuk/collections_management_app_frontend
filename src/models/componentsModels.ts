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

interface LoaderProps {
  status: string;
  error: string;
}

interface ITableHeaderTitles {
  id: string;
  label: string;
  minWidth: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  LoaderProps,
  ITableHeaderTitles,
};
