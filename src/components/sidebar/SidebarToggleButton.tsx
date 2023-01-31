import { FC, useState } from 'react';
import { Sidebar } from './Sidebar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarToggleButton: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export { SidebarToggleButton };
