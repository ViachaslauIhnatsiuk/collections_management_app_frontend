import { FC } from 'react';
import { Typography } from '@mui/material';

const HeaderLogo: FC = () => {
  return (
    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
      Logo
    </Typography>
  );
};

export { HeaderLogo };
