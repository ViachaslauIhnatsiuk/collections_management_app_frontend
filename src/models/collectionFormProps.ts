import { Dispatch, SetStateAction } from 'react';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';
import { IExtraFieldValue } from './componentsModels';

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
  extraFields: IExtraFieldValue[];
  setExtraFields: Dispatch<SetStateAction<IExtraFieldValue[]>>;
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
