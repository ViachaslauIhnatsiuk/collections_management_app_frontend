import { FC } from 'react';
import { MenuItem, Menu } from '@mui/material';
import { MobileMenuProps } from '../../../models/componentsProps';
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
      <MenuItem disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
        <HeaderAuthButtons />
      </MenuItem>
      <MenuItem disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
        <HeaderLocalization />
      </MenuItem>
      <MenuItem disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
        <HeaderThemeSwitcher />
      </MenuItem>
    </Menu>
  );
};

export { HeaderMobileMenu };
