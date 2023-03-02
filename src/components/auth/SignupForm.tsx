import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Box, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NameField } from './authComponents/NameField';
import { EmailField } from './authComponents/EmailField';
import { PasswordField } from './authComponents/PasswordField';
import { SubmitButton } from './authComponents/SubmitButton';
import { IUserForm } from '../../models/componentsModels';
import { useTranslation } from 'react-i18next';

const SignupForm: FC = () => {
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { t } = useTranslation();

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
        data-testid="signUp-form"
      >
        <Avatar sx={{ backgroundColor: 'primary.main' }}>
          <HowToRegIcon />
        </Avatar>
        <Typography variant="h5">{t('auth.signUp')}</Typography>
        <NameField />
        <EmailField />
        <PasswordField />
        <SubmitButton type="Sign Up" value={t('auth.signUp')} />
        <Typography sx={{ fontSize: 14 }}>
          {t('auth.haveAccount')}{' '}
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ fontSize: 14, color: 'primary.main' }}>
              {t('auth.signIn')}
            </Typography>
          </Link>
        </Typography>
      </Box>
    </FormProvider>
  );
};

export { SignupForm };
