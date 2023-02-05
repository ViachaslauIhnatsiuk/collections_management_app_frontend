import { FC } from 'react';
import { TextField } from '@mui/material';
import { FilterBarProps } from '../../models/componentsProps';

const FilterBar: FC<FilterBarProps> = ({ setFiltered }) => {
  return (
    <TextField
      variant="outlined"
      inputProps={{
        style: {
          padding: '4px 10px',
        },
      }}
      autoComplete="off"
      size="small"
      placeholder="Filter..."
      onChange={(e) => setFiltered(e.target.value)}
    />
  );
};

export { FilterBar };
