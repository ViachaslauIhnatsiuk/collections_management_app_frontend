import { Container } from '@mui/material';
import { FC } from 'react';
import { SigninForm } from '../forms/SigninForm';

const SigninPage: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      <SigninForm />
    </Container>
  );
};

export { SigninPage };
