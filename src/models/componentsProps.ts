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
  submitHandler(email: string, password: string, name?: string): void;
}

interface AuthButtonProps {
  value: string;
  path: string;
  handler?: () => void;
}

export type {
  MobileMenuProps,
  SidebarProps,
  SidebarListItemProps,
  SubmitButtonProps,
  AuthButtonProps,
};
