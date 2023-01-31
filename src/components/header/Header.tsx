import { FC, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';
import { HeaderAuthButtons } from './HeaderAuthButtons';
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher';
import { HeaderLocalization } from './HeaderLocalization';
import { HeaderMobileMenu } from './HeaderMobileMenu';

const Header: FC = () => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchorElement);

  return (
    <AppBar position="static">
      <Toolbar sx={{ columnGap: 2 }}>
        <IconButton size="medium" edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <HeaderLogo />
        <HeaderSearch />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ columnGap: 2, display: { xs: 'none', md: 'flex' } }}>
          <HeaderAuthButtons />
          <HeaderLocalization />
          <HeaderThemeSwitcher />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
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
