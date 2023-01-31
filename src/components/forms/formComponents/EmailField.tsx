import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { emailRegister } from '../../../constants/formValidation';
import { IFormUser } from '../../../models/formUser';

const EmailField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormUser>();

  return (
    <>
      <TextField
        required
        fullWidth
        label="Email"
        autoComplete="off"
        {...register('email', emailRegister)}
      />
      <Typography sx={{ fontSize: 10 }}>{errors.email?.message}</Typography>
    </>
  );
};

export { EmailField };
