import { Dispatch, SetStateAction } from 'react';
import { IExtraFields } from './itemExtraFieldsProps';

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
  extraFields: IExtraFields[];
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type {
  CollectionFormProps,
  CollectionEditFormProps,
  CollectionFieldProps,
  CollectionCreationFormButtonProps,
  CollectionEditFormButtonProps,
};
