import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SidebarProps } from '../../models/componentsProps';
import { sidebarList } from '../../constants/sidebarList';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={isSidebarOpen} onClick={toggleSidebar}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
        <List>
          {sidebarList.map((item) => (
            <ListItem key={item.title} disablePadding>
              <Link to={item.link} style={{ textDecoration: 'none' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
