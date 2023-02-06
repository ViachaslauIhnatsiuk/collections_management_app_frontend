import { FC } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ItemViewButton: FC = () => {
  return (
    <>
      <IconButton aria-label="view" color="primary">
        <VisibilityIcon />
      </IconButton>
    </>
  );
};

export { ItemViewButton };
