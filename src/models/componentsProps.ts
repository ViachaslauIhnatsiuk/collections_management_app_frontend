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

export type {
  MobileMenuProps,
  SidebarProps,
  SidebarListItemProps,
  SubmitButtonProps,
  AuthButtonProps,
};
