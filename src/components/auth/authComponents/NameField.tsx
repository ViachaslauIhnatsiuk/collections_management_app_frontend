import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { nameRegister } from '../../../constants/formValidation';
import { IUserForm } from '../../../models/componentsModels';
import { useTranslation } from 'react-i18next';

const NameField: FC = () => {
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
        label={t('auth.namePlaceholder')}
        autoComplete="off"
        {...register('name', nameRegister)}
      />
      <Typography
        sx={{ fontSize: 11, alignSelf: 'flex-start', pl: 1, color: 'secondary.main' }}
      >
        {errors.name?.message}
      </Typography>
    </>
  );
};

export { NameField };
