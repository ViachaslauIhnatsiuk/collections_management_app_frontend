import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ItemViewButton: FC<{ itemId: string }> = ({ itemId }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/items/${itemId}`} style={{ textDecoration: 'none' }}>
      <IconButton aria-label="view" color="primary">
        <VisibilityIcon />
      </IconButton>
    </Link>
  );
};

export { ItemViewButton };
