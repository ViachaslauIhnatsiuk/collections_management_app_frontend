import { FC } from 'react';
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

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={isSidebarOpen} onClick={toggleSidebar}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
