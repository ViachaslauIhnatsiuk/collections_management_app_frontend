import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useAppDispatch } from '../../store/store';
import { updateUser } from '../../store/slices/usersSlice/usersSlice';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';

const UserAdminStatusButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { getUserById } = useUsers();

  const toggleAdminStatus = (): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isAdmin: !user.isAdmin };
    dispatch(updateUser(updatedUserData));
  };

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <AdminPanelSettingsIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        actionHandler={toggleAdminStatus}
      />
    </>
  );
};

export { UserAdminStatusButton };
