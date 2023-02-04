import { FC } from 'react';
import { TextField } from '@mui/material';
import { CollectionsFilterBarProps } from '../../models/componentsProps';

const CollectionsFilterbar: FC<CollectionsFilterBarProps> = ({ setState }) => {
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
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export { CollectionsFilterbar };
