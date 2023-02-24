import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from '../../../assets/logo.png';

const HeaderLogo: FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Box component="img" sx={{ height: 22 }} src={logo} alt="logo" />
      </Box>
    </Link>
  );
};

export { HeaderLogo };
