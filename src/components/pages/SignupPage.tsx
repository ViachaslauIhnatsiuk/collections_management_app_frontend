import { Container } from '@mui/material';
import { FC } from 'react';
import { SignupForm } from '../auth/SignupForm';

const SignupPage: FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 15 }}>
      <SignupForm />
    </Container>
  );
};

export { SignupPage };
