import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { emailRegister } from '../../../constants/formValidation';
import { IUserForm } from '../../../models/componentsModels';
import { useTranslation } from 'react-i18next';

const EmailField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserForm>();
  const { t } = useTranslation();

  return (
    <>
      <TextField
        required
        fullWidth
        label={t('auth.emailPlaceholder')}
        autoComplete="off"
        {...register('email', emailRegister)}
      />
      <Typography
        sx={{ fontSize: 11, alignSelf: 'flex-start', pl: 1, color: 'secondary.main' }}
      >
        {errors.email?.message}
      </Typography>
    </>
  );
};

export { EmailField };
