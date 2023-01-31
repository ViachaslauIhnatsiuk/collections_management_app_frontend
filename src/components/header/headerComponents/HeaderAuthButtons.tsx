import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const HeaderAuthButtons: FC = () => {
  return (
    <Box sx={{ display: 'flex', columnGap: 2 }}>
      <Link to="/signin" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          Sign In
        </Button>
      </Link>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small">
          Sign Up
        </Button>
      </Link>
    </Box>
  );
};

export { HeaderAuthButtons };
