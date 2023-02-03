import { FC } from 'react';
import { TextField } from '@mui/material';
import { ExtraFieldsFormInputProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldsFormInput: FC<ExtraFieldsFormInputProps> = ({
  fieldName,
  setFieldName,
}) => {
  return (
    <TextField
      size="small"
      required
      label="Field name"
      inputProps={{ maxLength: 20 }}
      autoComplete="off"
      value={fieldName}
      onChange={(e) => setFieldName(e.target.value)}
    />
  );
};

export { ExtraFieldsFormInput };
