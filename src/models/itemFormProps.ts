import { Dispatch, SetStateAction } from 'react';

interface ItemFormProps {
  value: string;
  itemId?: string;
  collectionId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemFormButtonProps extends ItemFormProps {
  extraFields: string[];
}

interface ItemFieldProps {
  value?: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  multi?: boolean;
  rows?: number;
}

export type { ItemFormProps, ItemFormButtonProps, ItemFieldProps };
