import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { ICollectionForm } from '../../../models/componentsModels';
import { ItemFieldProps } from '../../../models/itemFormProps';

const ItemFormField: FC<ItemFieldProps> = (props) => {
  const { value, type, minLength, maxLength, multi, rows } = props;
  const [fieldValue, setFieldValue] = useState<string>(value as string);
  const { register } = useFormContext<ICollectionForm>();

  return (
    <TextField
      size="small"
      inputProps={{ minLength, maxLength }}
      fullWidth
      multiline={multi}
      rows={rows}
      value={fieldValue}
      label={type.toUpperCase()}
      autoComplete="off"
      {...register(type as any)}
      onChange={(e) => setFieldValue(e.target.value)}
    />
  );
};

export { ItemFormField };
