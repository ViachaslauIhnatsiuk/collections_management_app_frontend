import { FC } from 'react';
import { MenuItem, Menu } from '@mui/material';
import { MobileMenuProps } from '../../models/componentsProps';
import { HeaderAuthButtons } from './HeaderAuthButtons';
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher';
import { HeaderLocalization } from './HeaderLocalization';

const HeaderMobileMenu: FC<MobileMenuProps> = ({
  isMenuOpen,
  menuAnchorElement,
  setMenuAnchorElement,
}) => {
  return (
    <Menu
      anchorEl={menuAnchorElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={() => setMenuAnchorElement(null)}
    >
      <MenuItem>
        <HeaderAuthButtons />
      </MenuItem>
      <MenuItem>
        <HeaderLocalization />
      </MenuItem>
      <MenuItem>
        <HeaderThemeSwitcher />
      </MenuItem>
    </Menu>
  );
};

export { HeaderMobileMenu };
