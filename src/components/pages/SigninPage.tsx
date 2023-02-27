import { Container } from '@mui/material';
import { FC } from 'react';
import { SigninForm } from '../auth/SigninForm';

const SigninPage: FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 15 }}>
      <SigninForm />
    </Container>
  );
};

export { SigninPage };
