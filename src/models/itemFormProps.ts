import { Dispatch, SetStateAction } from 'react';
import { IExtraField } from './componentsModels';

interface ItemFormProps {
  value: string;
  itemId?: string;
  collectionId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemFormButtonProps extends ItemFormProps {
  extraFields: IExtraField[];
}

interface ItemFieldProps {
  value?: string;
  type: string;
  label: string;
  minLength?: number;
  maxLength?: number;
  multi?: boolean;
  rows?: number;
}

export type { ItemFormProps, ItemFormButtonProps, ItemFieldProps };
