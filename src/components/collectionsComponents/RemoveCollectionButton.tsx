import { FC } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const RemoveCollectionButton: FC = () => {
  return (
    <IconButton aria-label="delete" color="primary">
      <DeleteIcon />
    </IconButton>
  );
};

export { RemoveCollectionButton };
