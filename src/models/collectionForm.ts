import { Dispatch, SetStateAction } from 'react';
import { IExtraFields } from './itemExtraFieldsProps';

type CollectionFormType = 'title' | 'description' | 'topic';

interface ICollectionForm {
  title: string;
  description: string;
  topic: string;
}

interface CollectionFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CollectionEditFormProps extends CollectionFormProps {
  id: string;
}

interface CollectionFieldProps {
  value?: string;
  type: string;
  minLength: number;
  maxLength: number;
  multi?: boolean;
  rows?: number;
}

interface CollectionCreationFormButtonProps {
  value: string;
  extraFields: IExtraFields[];
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CollectionEditFormButtonProps {
  id: string;
  value: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type {
  CollectionFormType,
  ICollectionForm,
  CollectionFormProps,
  CollectionEditFormProps,
  CollectionFieldProps,
  CollectionCreationFormButtonProps,
  CollectionEditFormButtonProps,
};
