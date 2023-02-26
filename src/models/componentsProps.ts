import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';
import { IItem } from '../store/slices/itemSlice/itemModel';

interface MobileMenuProps {
  isMenuOpen: boolean;
  menuAnchorElement: HTMLElement;
  setMenuAnchorElement: Dispatch<SetStateAction<null | HTMLElement>>;
}

interface LoaderProps {
  status: string;
  error: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarListItemProps {
  title: string;
  link: string;
  visible: boolean;
  children: ReactNode;
}

interface SubmitButtonProps {
  value: string;
}

interface AuthButtonProps extends SubmitButtonProps {
  path: string;
  handler?: () => void;
}

interface FilterBarProps {
  setFiltered: Dispatch<SetStateAction<string>>;
}

interface SortButtonProps {
  sortType: string;
  setSortType: Dispatch<SetStateAction<string>>;
}

interface ConfirmationModalProps {
  open: boolean;
  message: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  actionHandler: () => void;
}

interface HeaderSearchOptionProps {
  props: HTMLAttributes<HTMLLIElement>;
  option: IItem;
}

interface CollectionsToolbarProps {
  sortType: string;
  setSortType: Dispatch<SetStateAction<string>>;
  setFilteredCollections: Dispatch<SetStateAction<string>>;
}

export type {
  MobileMenuProps,
  LoaderProps,
  SidebarProps,
  SidebarListItemProps,
  SubmitButtonProps,
  AuthButtonProps,
  FilterBarProps,
  SortButtonProps,
  ConfirmationModalProps,
  HeaderSearchOptionProps,
  CollectionsToolbarProps,
};
