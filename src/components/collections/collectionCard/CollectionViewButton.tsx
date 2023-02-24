import { FC } from 'react';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const CollectionViewButton: FC<{ id: string }> = ({ id }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${id}`} style={{ textDecoration: 'none' }}>
      <Button size="small" sx={{ fontSize: 12 }} variant="contained">
        View collection
      </Button>
    </Link>
  );
};

export { CollectionViewButton };
