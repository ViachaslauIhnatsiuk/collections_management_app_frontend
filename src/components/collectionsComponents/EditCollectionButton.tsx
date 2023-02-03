import { FC } from 'react';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const EditCollectionButton: FC = () => {
  return (
    <IconButton aria-label="delete" color="primary">
      <BorderColorIcon />
    </IconButton>
  );
};

export { EditCollectionButton };
