import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import { useAppDispatch } from '../../store/store';
import { updateUser } from '../../store/slices/usersSlice/usersSlice';
import { useUsers } from '../../hooks/useUsers';
import { useResetState } from '../../hooks/useResetState';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { ConfirmationModal } from '../UI/ConfirmationModal';

const UserBlockButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { getUserById } = useUsers();
  const resetAppState = useResetState();

  const toggleBlockStatus = (): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isBlocked: !user.isBlocked };
    dispatch(updateUser(updatedUserData));
    if (currentUser.id === userId) resetAppState();
  };

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <BlockIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        actionHandler={toggleBlockStatus}
      />
    </>
  );
};

export { UserBlockButton };
