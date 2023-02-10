import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const UserViewButton: FC<{ userId: string }> = ({ userId }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/items/${userId}`} style={{ textDecoration: 'none' }}>
      <IconButton aria-label="view" color="primary">
        <VisibilityIcon />
      </IconButton>
    </Link>
  );
};

export { UserViewButton };
