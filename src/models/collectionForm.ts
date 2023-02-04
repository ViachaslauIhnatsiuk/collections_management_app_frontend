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

interface CollectionFieldProps {
  type: string;
  minLength: number;
  maxLength: number;
  multi?: boolean;
  rows?: number;
}

interface CollectionFormButtonProps {
  value: string;
  extraFields: IExtraFields[];
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type {
  CollectionFormType,
  ICollectionForm,
  CollectionFormProps,
  CollectionFieldProps,
  CollectionFormButtonProps,
};
