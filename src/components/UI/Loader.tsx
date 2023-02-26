import { FC } from 'react';
import { Alert, Container, LinearProgress } from '@mui/material';
import { LoaderProps } from '../../models/componentsProps';

const Loader: FC<LoaderProps> = ({ status, error }) => {
  return (
    <Container maxWidth="md" sx={{ display: 'grid', placeContent: 'center' }}>
      {status === 'loading' && (
        <LinearProgress
          color="secondary"
          sx={{
            position: 'absolute',
            top: { sm: 64, xs: 56 },
            left: '0px',
            width: '100%',
          }}
        />
      )}
      {error && (
        <Alert
          sx={{
            alignItems: 'center',
            mt: '300px',
            fontSize: 24,
            textAlign: 'center',
            '& .MuiAlert-icon': {
              fontSize: 30,
            },
          }}
          severity="error"
        >
          {error}
        </Alert>
      )}
    </Container>
  );
};

export { Loader };
