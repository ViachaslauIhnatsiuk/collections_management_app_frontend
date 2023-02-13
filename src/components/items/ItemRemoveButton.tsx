import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteItem } from '../../store/slices/itemSlice/itemSlice';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemRemoveButton: FC<{ itemData: IItem }> = ({ itemData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectAuth);

  const removeItem = (): void => {
    dispatch(deleteItem(itemData.id as string));
  };

  return (
    <>
      <IconButton
        sx={{ display: currentUser.id === itemData.ownerId ? 'inline-flex' : 'none' }}
        color="primary"
        onClick={() => setOpen(true)}
      >
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
