import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthButtonProps } from '../../../models/componentsProps';

const HeaderAuthButton: FC<AuthButtonProps> = ({ value, path, handler }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Button variant="contained" size="small" onClick={handler}>
        {value}
      </Button>
    </Link>
  );
};

export { HeaderAuthButton };
