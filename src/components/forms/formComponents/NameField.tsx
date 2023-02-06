import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { nameRegister } from '../../../constants/formValidation';
import { IUserForm } from '../../../models/componentsModels';

const NameField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserForm>();

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
