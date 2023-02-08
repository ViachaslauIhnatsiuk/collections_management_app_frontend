import { FC, ChangeEvent } from 'react';
import { Box, Checkbox, TextField } from '@mui/material';
import { ExtraFieldProps } from '../../../models/itemExtraFieldsProps';

const CollectionExtraField: FC<ExtraFieldProps> = (props) => {
  const { label, index, extraFields, setExtraFields } = props;

  const setValue = (e: ChangeEvent<HTMLInputElement>): void => {
    extraFields[index].name = e.target.value;
    setExtraFields([...extraFields]);
  };

  const setChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    extraFields[index].disabled = e.target.checked;
    setExtraFields([...extraFields]);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
      <Checkbox
        checked={extraFields[index].disabled}
        onChange={setChecked}
        sx={{ py: 0.3, px: 0 }}
      />
      <TextField
        inputProps={{
          sx: { fontSize: 13, height: 26, px: 1, py: 0, maxLength: 20 },
        }}
        InputLabelProps={{
          sx: {
            fontSize: 13,
            top: '-5px',
            '&.MuiInputLabel-shrink': { top: 2, fontSize: 14 },
          },
        }}
        size="small"
        type="text"
        autoComplete="off"
        fullWidth
        label={label}
        value={extraFields[index].name}
        onChange={setValue}
        disabled={!extraFields[index].disabled}
      />
    </Box>
  );
};

export { CollectionExtraField };
