import { FC } from 'react';
import { Box, Button } from '@mui/material';

const HeaderAuthButtons: FC = () => {
  return (
    <Box sx={{ display: 'flex', columnGap: 2 }}>
      <Button variant="contained" size="small">
        Sign In
      </Button>
      <Button variant="contained" size="small">
        Sign Up
      </Button>
    </Box>
  );
};

export { HeaderAuthButtons };
