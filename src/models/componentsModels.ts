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

enum ConfirmationMessages {
  deleteUser = 'delete this user',
  blockUser = 'block this user',
  changeUserStatus = 'change the status of this user',
  deleteItem = 'delete this item',
  deleteCollection = 'delete this collection',
}

export { ConfirmationMessages };
export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  ITableHeaderTitles,
  IExtraField,
  IExtraFieldValue,
};
