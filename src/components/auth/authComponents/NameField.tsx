import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { IUserForm } from '../../../models/componentsModels';
import { useTranslation } from 'react-i18next';
import { useValidation } from '../../../hooks/useValidation';

const NameField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserForm>();
  const { nameRegister } = useValidation();
  const { t } = useTranslation();

  return (
    <>
      <TextField
        required
        fullWidth
        label={t('auth.namePlaceholder')}
        autoComplete="off"
        inputProps={{ 'data-testid': 'name-field' }}
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
