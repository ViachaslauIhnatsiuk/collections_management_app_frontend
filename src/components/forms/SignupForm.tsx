import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Box, Typography, Container } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NameField } from './formComponents/NameField';
import { EmailField } from './formComponents/EmailField';
import { PasswordField } from './formComponents/PasswordField';
import { IFormUser } from '../../models/formUser';
import { SubmitButton } from './formComponents/SubmitButton';

const SignupForm: FC = () => {
  const methods = useForm<IFormUser>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;

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
        <HowToRegIcon />
      </Avatar>
      <Typography variant="h5">Sign up</Typography>
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
          <NameField />
          <EmailField />
          <PasswordField />
          <SubmitButton value="Sign Up" />
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: 14, color: '#000000' }}>
              Already have an account? Sign In
            </Typography>
          </Link>
        </Box>
      </FormProvider>
    </Container>
  );
};

export { SignupForm };
