import { Dispatch, SetStateAction } from 'react';

interface ItemFormProps {
  id: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemCreationFormButtonProps {
  value: string;
  extraFields: string[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemFieldProps {
  value?: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  multi?: boolean;
  rows?: number;
}

export type { ItemFormProps, ItemCreationFormButtonProps, ItemFieldProps };
