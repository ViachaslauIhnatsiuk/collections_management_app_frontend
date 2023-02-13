import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/store';
import { deleteCollection } from '../../../store/slices/collectionSlice/collectionSlice';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { ConfirmationModal } from '../../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../../models/componentsModels';

const CollectionRemoveButton: FC<{ id: string; ownerId: string }> = ({ id, ownerId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const removeCollection = (): void => {
    dispatch(deleteCollection(id));
  };

  return (
    <>
      <IconButton
        sx={{ visibility: currentUser.id === ownerId ? 'visible' : 'hidden' }}
        color="primary"
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.deleteCollection}
        setOpen={setOpen}
        actionHandler={removeCollection}
      />
    </>
  );
};

export { CollectionRemoveButton };
