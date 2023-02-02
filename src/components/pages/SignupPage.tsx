import { Container } from '@mui/material';
import { FC } from 'react';
import { SignupForm } from '../forms/SignupForm';

const SignupPage: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      <SignupForm />;
    </Container>
  );
};

export { SignupPage };
