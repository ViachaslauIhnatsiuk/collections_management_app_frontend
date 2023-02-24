import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { SidebarListItemProps } from '../../models/componentsProps';

const SidebarListItem: FC<SidebarListItemProps> = (props) => {
  const theme = useTheme();
  const { link, title, visible, children } = props;

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <ListItem disablePadding sx={{ display: visible ? 'flex' : 'none' }}>
        <ListItemButton>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText sx={{ color: theme.palette.text.primary }} primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export { SidebarListItem };
