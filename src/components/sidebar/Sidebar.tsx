import { FC } from 'react';
import { Box, List, Drawer } from '@mui/material';
import { SidebarProps } from '../../models/componentsProps';
import { sidebarList } from '../../constants/sidebarList';
import { SidebarListItem } from './SidebarListItem';

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={isSidebarOpen} onClick={toggleSidebar}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
        <List>
          {sidebarList.map((item) => (
            <SidebarListItem key={item.title} {...item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export { Sidebar };
