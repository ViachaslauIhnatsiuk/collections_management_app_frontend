import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { textareaScrollbarStyles } from '../../../constants/componentsStyles';
import { ItemFieldProps } from '../../../models/itemFormProps';

const ItemFormField: FC<ItemFieldProps> = (props) => {
  const { value, type, label, minLength, maxLength, multi, rows } = props;
  const [fieldValue, setFieldValue] = useState<string>(value as string);
  const { register } = useFormContext();

  return (
    <TextField
      sx={textareaScrollbarStyles}
      size="small"
      type={type}
      inputProps={{ minLength, maxLength }}
      fullWidth
      multiline={multi}
      rows={rows}
      value={fieldValue}
      label={type === 'date' ? '' : label}
      autoComplete="off"
      {...register(label)}
      onChange={(e) => setFieldValue(e.target.value)}
    />
  );
};

export { ItemFormField };
