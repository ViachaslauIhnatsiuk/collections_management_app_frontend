import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { extraFieldsSelectItems } from '../../../constants/extraFieldsSelectItems';
import { ExtraFieldsFormSelectProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldsFormSelect: FC<ExtraFieldsFormSelectProps> = ({
  fieldDataType,
  setFieldDataType,
}) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel>Data type</InputLabel>
      <Select
        value={fieldDataType}
        label="Data type"
        onChange={(e) => setFieldDataType(e.target.value)}
      >
        {extraFieldsSelectItems.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { ExtraFieldsFormSelect };
