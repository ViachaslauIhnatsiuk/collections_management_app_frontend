import { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { nameRegister } from '../../../constants/formValidation';
import {
  CollectionFormProps,
  CollectionFormType,
  ICollectionForm,
} from '../../../models/collectionForm';

const CollectionFormField: FC<CollectionFormProps> = ({ type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ICollectionForm>();

  return (
    <>
      <TextField
        size="small"
        required
        fullWidth
        label={type.toUpperCase()}
        autoComplete="off"
        {...register(type as CollectionFormType, nameRegister)}
      />
      <Typography sx={{ fontSize: 10 }}>
        {errors[type as CollectionFormType]?.message}
      </Typography>
    </>
  );
};

export { CollectionFormField };
