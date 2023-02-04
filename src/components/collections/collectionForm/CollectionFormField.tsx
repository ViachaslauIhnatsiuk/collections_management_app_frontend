import { FC } from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import {
  CollectionFieldProps,
  CollectionFormType,
  ICollectionForm,
} from '../../../models/collectionForm';

const CollectionFormField: FC<CollectionFieldProps> = ({
  type,
  minLength,
  maxLength,
  multi,
  rows,
}) => {
  const { register } = useFormContext<ICollectionForm>();

  return (
    <TextField
      size="small"
      inputProps={{ minLength, maxLength }}
      fullWidth
      multiline={multi}
      rows={rows}
      label={type.toUpperCase()}
      autoComplete="off"
      {...register(type as CollectionFormType)}
    />
  );
};

export { CollectionFormField };
