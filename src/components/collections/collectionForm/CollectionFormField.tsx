import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { CollectionFormType, ICollectionForm } from '../../../models/componentsModels';
import { CollectionFormFieldProps } from '../../../models/collectionFormProps';

const CollectionFormField: FC<CollectionFormFieldProps> = (props) => {
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
      {...register(type as CollectionFormType, {
        required: true,
      })}
      onChange={(e) => setFieldValue(e.target.value)}
    />
  );
};

export { CollectionFormField };
