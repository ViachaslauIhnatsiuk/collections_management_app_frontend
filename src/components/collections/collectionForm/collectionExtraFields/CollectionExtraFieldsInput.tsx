import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';
import { CollectionExtraFieldsProps } from '../../../../models/collectionFormProps';

const CollectionExtraFieldsInput: FC<CollectionExtraFieldsProps> = (props) => {
  const { newExtraField, setNewExtraField } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewExtraField({ ...newExtraField, name: e.target.value });
  };

  return (
    <TextField
      size="small"
      fullWidth
      inputProps={{ minLength: 1, maxLength: 25 }}
      value={newExtraField.name}
      label="Extra field"
      autoComplete="off"
      onChange={handleChange}
    />
  );
};

export { CollectionExtraFieldsInput };
