import { Dispatch, SetStateAction } from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  menuAnchorElement: HTMLElement;
  setMenuAnchorElement: Dispatch<SetStateAction<null | HTMLElement>>;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarListItemProps {
  title: string;
  link: string;
}

interface SubmitButtonProps {
  value: string;
}

interface AuthButtonProps {
  value: string;
  path: string;
  handler?: () => void;
}

interface CollectionsFilterBarProps {
  setState: Dispatch<SetStateAction<string>>;
}

interface ExtraFieldsFormInputProps {
  fieldName: string;
  setFieldName: Dispatch<SetStateAction<string>>;
}

interface ExtraFieldsFormSelectProps {
  fieldDataType: string;
  setFieldDataType: Dispatch<SetStateAction<string>>;
}

interface ExtraFieldsFormButtonProps {
  setField: () => void;
}

interface IExtraFields {
  name: string;
  type: string;
}

interface ExtraFieldsFormProps {
  extraFields: IExtraFields[];
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
}

interface ExtraFieldChipProps extends ExtraFieldsFormProps {
  name: string;
  type: string;
}

export type {
  MobileMenuProps,
  SidebarProps,
  SidebarListItemProps,
  SubmitButtonProps,
  AuthButtonProps,
  CollectionsFilterBarProps,
  ExtraFieldsFormInputProps,
  ExtraFieldsFormSelectProps,
  ExtraFieldsFormButtonProps,
  IExtraFields,
  ExtraFieldsFormProps,
  ExtraFieldChipProps,
};
