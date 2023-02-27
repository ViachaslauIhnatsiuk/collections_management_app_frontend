import { FC } from 'react';
import { Box, Divider, List, Drawer, useTheme } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useTranslation } from 'react-i18next';
import { SidebarProps } from '../../models/componentsProps';
import { SidebarListItem } from './SidebarListItem';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { HeaderLogo } from '../header/headerComponents/HeaderLogo';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { currentUser } = useAppSelector(selectAuth);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Drawer
      anchor="left"
      transitionDuration={400}
      open={isSidebarOpen}
      onClick={toggleSidebar}
    >
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
        <List sx={{ pt: 2.5 }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', pb: 2 }}>
            <HeaderLogo src={theme.palette.mode === 'light' ? logoDark : logo} />
          </Box>
          <Divider variant="middle" />
          <SidebarListItem title={t('sidebar.main')} link="/" visible>
            <AppsOutlinedIcon sx={{ color: 'primary.main' }} />
          </SidebarListItem>
          <SidebarListItem
            title={t('sidebar.allCollections')}
            link="/all-collections"
            visible
          >
            <ViewListIcon sx={{ color: 'primary.main' }} />
          </SidebarListItem>
          <SidebarListItem
            title={t('sidebar.userCollections')}
            link="/user-collections"
            visible={Boolean(currentUser._id)}
          >
            <ViewQuiltIcon sx={{ color: 'primary.main' }} />
          </SidebarListItem>
          <SidebarListItem
            title={t('sidebar.admin')}
            link="/admin"
            visible={currentUser.isAdmin}
          >
            <SupervisorAccountIcon sx={{ color: 'primary.main' }} />
          </SidebarListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
