import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';
import { AdminStatusButtonProps } from '../../models/adminButtonsProps';

const UserAdminStatusButton: FC<AdminStatusButtonProps> = ({ userId, isAdmin }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleAdminStatus } = useUsers(userId);

  return (
    <>
      <IconButton color={isAdmin ? 'error' : 'success'} onClick={() => setOpen(true)}>
        <AdminPanelSettingsIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.changeUserStatus}
        setOpen={setOpen}
        actionHandler={toggleAdminStatus}
      />
    </>
  );
};

export { UserAdminStatusButton };
