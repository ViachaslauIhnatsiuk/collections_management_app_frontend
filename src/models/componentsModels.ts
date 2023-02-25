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

enum ConfirmationMessages {
  deleteUser = 'delete this user',
  blockUser = 'block this user',
  unblockUser = 'unblock this user',
  changeUserStatus = 'change the status of this user',
  deleteItem = 'delete this item',
  deleteCollection = 'delete this collection',
}

export { ConfirmationMessages };
export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  ICollectionExtraFieldForm,
  ITableHeaderTitles,
  IExtraField,
};
