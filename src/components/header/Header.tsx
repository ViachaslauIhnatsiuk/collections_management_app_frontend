import { FC, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { HeaderLogo } from './headerComponents/HeaderLogo';
import { HeaderSearch } from './headerComponents/HeaderSearch';
import { HeaderAuthButtons } from './headerComponents/HeaderAuthButtons';
import { HeaderThemeSwitcher } from './headerComponents/HeaderThemeSwitcher';
import { HeaderLocalization } from './headerComponents/HeaderLocalization';
import { HeaderMobileMenu } from './headerComponents/HeaderMobileMenu';
import { SidebarToggleButton } from '../sidebar/SidebarToggleButton';
import logo from '../../assets/logo.png';

const Header: FC = () => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchorElement);

  return (
    <AppBar position="sticky" data-testid="header">
      <Toolbar sx={{ gap: { sm: 2, xs: 1 } }}>
        <SidebarToggleButton />
        <HeaderLogo src={logo} />
        <HeaderSearch />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ gap: 2, display: { xs: 'none', md: 'flex' } }}>
          <HeaderAuthButtons />
          <HeaderLocalization />
          <HeaderThemeSwitcher />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            sx={{ p: 0 }}
            color="inherit"
            onClick={(e) => setMenuAnchorElement(e.currentTarget)}
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <HeaderMobileMenu
        isMenuOpen={isMenuOpen}
        menuAnchorElement={menuAnchorElement as HTMLElement}
        setMenuAnchorElement={setMenuAnchorElement}
      />
    </AppBar>
  );
};

export { Header };
