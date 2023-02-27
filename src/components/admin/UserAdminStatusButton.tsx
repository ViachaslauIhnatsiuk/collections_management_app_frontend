import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';
import { AdminStatusButtonProps } from '../../models/componentsProps';

const UserAdminStatusButton: FC<AdminStatusButtonProps> = ({ userId, isAdmin }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleAdminStatus } = useUsers(userId);

  const handleAction = (): void => {
    toggleAdminStatus();
    setOpen(false);
  };

  return (
    <>
      <IconButton color={isAdmin ? 'primary' : 'default'} onClick={() => setOpen(true)}>
        <AdminPanelSettingsIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.changeUserStatus}
        setOpen={setOpen}
        actionHandler={handleAction}
      />
    </>
  );
};

export { UserAdminStatusButton };
