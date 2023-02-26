import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Box, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NameField } from './formComponents/NameField';
import { EmailField } from './formComponents/EmailField';
import { PasswordField } from './formComponents/PasswordField';
import { SubmitButton } from './formComponents/SubmitButton';
import { IUserForm } from '../../models/componentsModels';

const SignupForm: FC = () => {
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
          <HowToRegIcon />
        </Avatar>
        <Typography variant="h5">Sign up</Typography>
        <NameField />
        <EmailField />
        <PasswordField />
        <SubmitButton value="Sign Up" />
        <Typography sx={{ fontSize: 14 }}>
          Already have an account?{' '}
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ fontSize: 14, color: 'primary.main' }}>
              Sign In
            </Typography>
          </Link>
        </Typography>
      </Box>
    </FormProvider>
  );
};

export { SignupForm };
