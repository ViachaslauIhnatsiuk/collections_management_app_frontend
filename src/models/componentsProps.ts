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

interface SubmitButtonProps {
  submitHandler(email: string, password: string, name?: string): void;
}

export type { MobileMenuProps, SidebarProps, SubmitButtonProps };
