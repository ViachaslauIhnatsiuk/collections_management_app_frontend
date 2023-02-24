import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const HeaderLogo: FC<{ src: string }> = ({ src }) => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Box component="img" sx={{ height: 22 }} src={src} alt="logo" />
      </Box>
    </Link>
  );
};

export { HeaderLogo };
