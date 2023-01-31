import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const HeaderLogo: FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
        Logo
      </Typography>
    </Link>
  );
};

export { HeaderLogo };
