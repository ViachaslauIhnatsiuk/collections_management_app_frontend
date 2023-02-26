import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { CollectionExtraFieldsProps } from '../../../../models/collectionFormProps';
import { collectionExtraFieldsTypes } from '../../../../constants/renderLists';

const CollectionExtraFieldsSelect: FC<CollectionExtraFieldsProps> = (props) => {
  const { newExtraField, setNewExtraField } = props;

  const handleChange = (e: SelectChangeEvent) => {
    setNewExtraField({ ...newExtraField, type: e.target.value });
  };

  return (
    <FormControl size="small" fullWidth style={{ maxWidth: 120 }}>
      <InputLabel>Data type</InputLabel>
      <Select value={newExtraField.type} label="Data type" onChange={handleChange}>
        {collectionExtraFieldsTypes.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CollectionExtraFieldsSelect };
