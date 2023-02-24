import { FC } from 'react';
import { Box, Divider, List, Drawer, useTheme } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { SidebarProps } from '../../models/componentsProps';
import { SidebarListItem } from './SidebarListItem';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { HeaderLogo } from '../header/headerComponents/HeaderLogo';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { currentUser } = useAppSelector(selectAuth);
  const theme = useTheme();

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
          <SidebarListItem title="Main" link="/" visible>
            <AppsOutlinedIcon />
          </SidebarListItem>
          <SidebarListItem title="All collections" link="/all-collections" visible>
            <ViewListIcon />
          </SidebarListItem>
          <SidebarListItem
            title="My collections"
            link="/user-collections"
            visible={Boolean(currentUser.id)}
          >
            <ViewQuiltIcon />
          </SidebarListItem>
          <SidebarListItem title="Admin" link="/admin" visible={currentUser.isAdmin}>
            <SupervisorAccountIcon />
          </SidebarListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
