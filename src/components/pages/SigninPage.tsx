import { Container } from '@mui/material';
import { FC } from 'react';
import { SigninForm } from '../forms/SigninForm';

const SigninPage: FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 20 }}>
      <SigninForm />
    </Container>
  );
};

export { SigninPage };
