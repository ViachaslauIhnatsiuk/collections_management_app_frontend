import { FC } from 'react';
import { Container, Typography } from '@mui/material';

const NotFoundPage: FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: 60 }}>404</Typography>
      <Typography sx={{ fontSize: 40 }}>Page not found</Typography>
    </Container>
  );
};

export { NotFoundPage };
