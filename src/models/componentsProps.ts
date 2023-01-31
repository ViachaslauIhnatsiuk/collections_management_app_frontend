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
  handler(email: string, password: string, name?: string): Promise<void>;
}

export type { MobileMenuProps, SidebarProps, SubmitButtonProps };
