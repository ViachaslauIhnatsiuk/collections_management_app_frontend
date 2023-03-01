import { AuthProvider } from 'firebase/auth';
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';
import { IItem } from '../store/slices/itemSlice/itemModel';

interface MobileMenuProps {
  isMenuOpen: boolean;
  menuAnchorElement: HTMLElement;
  setMenuAnchorElement: Dispatch<SetStateAction<null | HTMLElement>>;
}

interface LoaderProps {
  status?: string;
  error?: string;
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
  type?: string;
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

interface CollectionsToolbarProps extends UsersFilterSelectProps {
  sortType: string;
  setSortType: Dispatch<SetStateAction<string>>;
  setFilteredCollections: Dispatch<SetStateAction<string>>;
}

interface SocialAuthButtonProps {
  provider: AuthProvider;
  value: string;
  icon: JSX.Element;
}

interface AdminStatusButtonProps {
  userId: string;
  isAdmin: boolean;
}

interface BlockButtonProps {
  userId: string;
  isBlocked: boolean;
}

interface UsersFilterSelectProps {
  filterUser?: string;
  setFilterUser?: Dispatch<SetStateAction<string>>;
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
  SocialAuthButtonProps,
  AdminStatusButtonProps,
  BlockButtonProps,
  UsersFilterSelectProps,
};
