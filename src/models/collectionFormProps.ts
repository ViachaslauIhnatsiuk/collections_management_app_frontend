import { Dispatch, SetStateAction } from 'react';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';
import { IExtraField } from './itemExtraFieldsProps';

interface CollectionFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CollectionEditFormProps extends CollectionFormProps {
  id: string;
}

interface CollectionEditFormButtonProps extends CollectionEditFormProps {
  value: string;
}

interface CollectionFormFieldProps {
  value?: string;
  type: string;
  minLength: number;
  maxLength: number;
  multi?: boolean;
  rows?: number;
}

interface CollectionCreationFormButtonProps {
  value: string;
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CollectionTopicSelectProps {
  type: string;
  value: string;
}

interface CollectionFormFieldsProps {
  fieldsValues: ICollection;
}

export type {
  CollectionFormProps,
  CollectionEditFormProps,
  CollectionFormFieldProps,
  CollectionCreationFormButtonProps,
  CollectionEditFormButtonProps,
  CollectionTopicSelectProps,
  CollectionFormFieldsProps,
};
