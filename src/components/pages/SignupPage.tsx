import { Container } from '@mui/material';
import { FC } from 'react';
import { SignupForm } from '../forms/SignupForm';

const SignupPage: FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 20 }}>
      <SignupForm />
    </Container>
  );
};

export { SignupPage };
