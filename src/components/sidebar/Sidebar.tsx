import { FC } from 'react';
import { Box, List, Drawer } from '@mui/material';
import { SidebarProps } from '../../models/componentsProps';
import { SidebarListItem } from './SidebarListItem';
import { selectAuth, useAppSelector } from '../../store/selectors';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { currentUser } = useAppSelector(selectAuth);

  return (
    <Drawer anchor="left" open={isSidebarOpen} onClick={toggleSidebar}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
        <List>
          <SidebarListItem title="Main" link="/" visible />
          <SidebarListItem title="All collections" link="/all-collections" visible />
          <SidebarListItem
            title="My collections"
            link="/user-collections"
            visible={Boolean(currentUser.id)}
          />
          <SidebarListItem title="Admin" link="/admin" visible={currentUser.isAdmin} />
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
