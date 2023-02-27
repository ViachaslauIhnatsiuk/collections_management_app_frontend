import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Box, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { EmailField } from './authComponents/EmailField';
import { PasswordField } from './authComponents/PasswordField';
import { SubmitButton } from './authComponents/SubmitButton';
import { IUserForm } from '../../models/componentsModels';
import { SocialAuthButtons } from './socialAuth/SocialAuthButtons';

const SigninForm: FC = () => {
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(() => reset())}
        sx={{
          width: '100%',
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Avatar sx={{ backgroundColor: 'primary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <EmailField />
        <PasswordField />
        <SubmitButton value="Sign In" />
        <Typography sx={{ fontSize: 14 }}>
          Don`t have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ fontSize: 14, color: 'primary.main' }}>
              Sign Up
            </Typography>
          </Link>
        </Typography>
        <SocialAuthButtons />
      </Box>
    </FormProvider>
  );
};

export { SigninForm };
