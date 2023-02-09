import { Dispatch, SetStateAction } from 'react';
import { IExtraFieldValue } from './componentsModels';

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
  extraFields: IExtraFieldValue[];
  setExtraFields: Dispatch<SetStateAction<IExtraFieldValue[]>>;
}

interface CollectionTopicSelectProps {
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
  CollectionTopicSelectProps,
  CollectionImageProps,
};
