import { Dispatch, SetStateAction } from 'react';
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
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type {
  CollectionFormProps,
  CollectionEditFormProps,
  CollectionFieldProps,
  CollectionCreationFormButtonProps,
  CollectionEditFormButtonProps,
};
