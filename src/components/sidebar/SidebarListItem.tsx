import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SidebarListItemProps } from '../../models/componentsProps';

const SidebarListItem: FC<SidebarListItemProps> = ({ link, title, visible }) => {
  return (
    <ListItem disablePadding sx={{ display: visible ? 'flex' : 'none' }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export { SidebarListItem };
