import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteUser } from '../../store/slices/usersSlice/usersSlice';
import { RemoveConfirmationModal } from '../UI/RemoveConfirmationModal';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { useResetState } from '../../hooks/useResetState';

const UserRemoveButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const resetAppState = useResetState();

  const removeUser = (): void => {
    dispatch(deleteUser(userId));
    if (currentUser.id === userId) resetAppState();
  };

  return (
    <>
      <IconButton aria-label="delete" color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <RemoveConfirmationModal open={open} setOpen={setOpen} actionHandler={removeUser} />
    </>
  );
};

export { UserRemoveButton };
