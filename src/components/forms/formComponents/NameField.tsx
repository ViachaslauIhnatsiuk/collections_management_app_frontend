import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { nameRegister } from '../../../constants/formValidation';
import { IFormUser } from '../../../models/formUser';

const NameField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormUser>();

  return (
    <>
      <TextField
        required
        fullWidth
        label="Name"
        autoComplete="off"
        {...register('name', nameRegister)}
      />
      <Typography sx={{ fontSize: 10 }}>{errors.name?.message}</Typography>
    </>
  );
};

export { NameField };
