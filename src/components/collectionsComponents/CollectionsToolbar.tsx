import { FC } from 'react';
import { TextField, Toolbar } from '@mui/material';
import { AddCollectionButton } from './AddCollectionsButton';

const CollectionsToolbar: FC = () => {
  return (
    <Toolbar sx={{ gap: 2 }}>
      <TextField
        variant="outlined"
        inputProps={{
          style: {
            padding: 4,
          },
        }}
        autoComplete="off"
        size="small"
      />
      <AddCollectionButton />
    </Toolbar>
  );
};

export { CollectionsToolbar };
