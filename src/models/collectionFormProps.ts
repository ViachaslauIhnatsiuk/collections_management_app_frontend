import { Dispatch, SetStateAction } from 'react';
import { IExtraField } from './componentsModels';

interface CollectionFormProps {
  id?: string;
  value: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CollectionFormFieldProps {
  value?: string;
  type: string;
  minLength: number;
  maxLength: number;
  multi?: boolean;
  rows?: number;
}

interface CollectionFormButtonProps extends CollectionFormProps {
  imageUrl: string;
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
}

interface CollectionExtraFieldProps {
  extraField: IExtraField;
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
}

interface CollectionExtraFieldsProps {
  newExtraField: IExtraField;
  setNewExtraField: Dispatch<SetStateAction<IExtraField>>;
}

interface CollectionExtraFieldsFormProps {
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
}

interface CollectionExtraFieldsButtonProps extends CollectionExtraFieldsFormProps {
  newExtraField: IExtraField;
  setNewExtraField: Dispatch<SetStateAction<IExtraField>>;
}

interface CollectionSelectProps {
  type: string;
  value: string;
}

interface CollectionImageProps {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export type {
  CollectionFormProps,
  CollectionFormFieldProps,
  CollectionFormButtonProps,
  CollectionExtraFieldProps,
  CollectionExtraFieldsProps,
  CollectionExtraFieldsFormProps,
  CollectionExtraFieldsButtonProps,
  CollectionSelectProps,
  CollectionImageProps,
};
