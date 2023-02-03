import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { nameRegister } from '../../../constants/formValidation';

type FormType = 'title' | 'description' | 'topic';

interface FormContext {
  title: string;
  description: string;
  topic: string;
}

const MainCollectionFormField: FC<{ type: string }> = ({ type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormContext>();

  return (
    <>
      <TextField
        size="small"
        required
        fullWidth
        label={type.toUpperCase()}
        autoComplete="off"
        {...register(type as FormType, nameRegister)}
      />
      <Typography sx={{ fontSize: 10 }}>{errors[type as FormType]?.message}</Typography>
    </>
  );
};

export { MainCollectionFormField };
