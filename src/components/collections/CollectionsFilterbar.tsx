import { Dispatch, FC, SetStateAction } from 'react';
import { TextField } from '@mui/material';

const CollectionsFilterbar: FC<{
  setState: Dispatch<SetStateAction<string>>;
}> = ({ setState }) => {
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
