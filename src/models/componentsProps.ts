import { Dispatch, SetStateAction } from 'react';

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
  setOpen: Dispatch<SetStateAction<boolean>>;
  actionHandler: () => void;
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
};
