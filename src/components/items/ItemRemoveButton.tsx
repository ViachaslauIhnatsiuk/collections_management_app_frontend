import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteItem } from '../../store/slices/itemSlice/itemSlice';
import { ConfirmationModal } from '../UI/ConfirmationModal';

const ItemRemoveButton: FC<{ itemId: string }> = ({ itemId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const removeCollection = (): void => {
    dispatch(deleteItem(itemId));
  };

  return (
    <>
      <IconButton aria-label="delete" color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal open={open} setOpen={setOpen} actionHandler={removeCollection} />
    </>
  );
};

export { ItemRemoveButton };
