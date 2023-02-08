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

interface ITableHeaderTitles {
  id: string;
  label: string;
  minWidth: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

interface IExtraField {
  name: string;
  type: string;
}

interface IExtraFieldValue extends IExtraField {
  disabled: boolean;
}

export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  ITableHeaderTitles,
  IExtraField,
  IExtraFieldValue,
};
