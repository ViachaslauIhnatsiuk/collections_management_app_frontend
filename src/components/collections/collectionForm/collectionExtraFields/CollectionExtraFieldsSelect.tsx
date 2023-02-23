import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { CollectionExtraFieldsProps } from '../../../../models/collectionFormProps';

const CollectionExtraFieldsSelect: FC<CollectionExtraFieldsProps> = (props) => {
  const { newExtraField, setNewExtraField } = props;

  const handleChange = (e: SelectChangeEvent) => {
    setNewExtraField({ ...newExtraField, type: e.target.value });
  };

  return (
    <FormControl size="small" fullWidth style={{ maxWidth: 120 }}>
      <InputLabel>Data type</InputLabel>
      <Select value={newExtraField.type} label="Data type" onChange={handleChange}>
        <MenuItem value="number">Number</MenuItem>
        <MenuItem value="text">Text</MenuItem>
        <MenuItem value="textfield">Textfield</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="checkbox">Checkbox</MenuItem>
      </Select>
    </FormControl>
  );
};

export { CollectionExtraFieldsSelect };
