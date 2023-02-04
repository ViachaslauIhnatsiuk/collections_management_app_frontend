import { FC } from 'react';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const ViewCollectionButton: FC<{ id: string }> = ({ id }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${id}`} style={{ textDecoration: 'none' }}>
      <Button variant="contained">View collection</Button>
    </Link>
  );
};

export { ViewCollectionButton };
