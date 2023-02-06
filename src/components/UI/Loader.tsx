import { FC } from 'react';
import { Container, LinearProgress, Typography } from '@mui/material';
import { LoaderProps } from '../../models/componentsModels';

const Loader: FC<LoaderProps> = ({ status, error }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
      }}
    >
      {status === 'loading' && (
        <LinearProgress
          color="success"
          sx={{ position: 'absolute', top: '64px', left: '0px', width: '100%' }}
        />
      )}
      {error && (
        <Typography
          variant="h4"
          sx={{ mt: '300px', color: '#2475c5', textAlign: 'center' }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
};

export { Loader };
