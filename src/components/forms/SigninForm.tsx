import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useSignin } from '../../hooks/useSignin';
import { Avatar, Box, Typography, Container } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { EmailField } from './formComponents/EmailField';
import { PasswordField } from './formComponents/PasswordField';
import { IFormUser } from '../../models/formUser';
import { SubmitButton } from './formComponents/SubmitButton';

const SigninForm: FC = () => {
  const methods = useForm<IFormUser>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { signIn } = useSignin();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 1,
        mt: 20,
      }}
    >
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        <LockOpenIcon />
      </Avatar>
      <Typography variant="h5">Sign in</Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(() => reset())}
          sx={{
            width: '100%',
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 1,
          }}
        >
          <EmailField />
          <PasswordField />
          <SubmitButton value="Sign In" submitHandler={signIn} />
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: 14, color: '#000000' }}>
              Don`t have an account? Sign Up
            </Typography>
          </Link>
        </Box>
      </FormProvider>
    </Container>
  );
};

export { SigninForm };
