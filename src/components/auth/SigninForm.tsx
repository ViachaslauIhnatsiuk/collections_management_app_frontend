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
import { useTranslation } from 'react-i18next';

const SigninForm: FC = () => {
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
      >
        <Avatar sx={{ backgroundColor: 'primary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant="h5">{t('auth.signIn')}</Typography>
        <EmailField />
        <PasswordField />
        <SubmitButton type="Sign In" value={t('auth.signIn')} />
        <Typography sx={{ fontSize: 14 }}>
          {t('auth.noAccount')}{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography variant="caption" sx={{ fontSize: 14, color: 'primary.main' }}>
              {t('auth.signUp')}
            </Typography>
          </Link>
        </Typography>
        <SocialAuthButtons />
      </Box>
    </FormProvider>
  );
};

export { SigninForm };
