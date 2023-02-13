import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteItem } from '../../store/slices/itemSlice/itemSlice';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';

const ItemRemoveButton: FC<{ itemId: string }> = ({ itemId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const removeItem = (): void => {
    dispatch(deleteItem(itemId));
  };

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.deleteItem}
        setOpen={setOpen}
        actionHandler={removeItem}
      />
    </>
  );
};

export { ItemRemoveButton };
