import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteUser } from '../../store/slices/usersSlice/usersSlice';
import { useResetState } from '../../hooks/useResetState';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { ConfirmationModal } from '../UI/ConfirmationModal';

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
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal open={open} setOpen={setOpen} actionHandler={removeUser} />
    </>
  );
};

export { UserRemoveButton };
