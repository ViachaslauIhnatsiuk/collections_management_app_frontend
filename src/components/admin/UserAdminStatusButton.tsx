import { FC, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { AdminStatusButtonProps } from '../../models/componentsProps';
import { useTranslation } from 'react-i18next';

const UserAdminStatusButton: FC<AdminStatusButtonProps> = ({ userId, isAdmin }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleAdminStatus } = useUsers(userId);
  const { t } = useTranslation();

  const handleAction = (): void => {
    toggleAdminStatus();
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={isAdmin ? t('tooltips.admin') : t('tooltips.notAdmin')}>
        <IconButton color={isAdmin ? 'primary' : 'default'} onClick={() => setOpen(true)}>
          <AdminPanelSettingsIcon />
        </IconButton>
      </Tooltip>
      <ConfirmationModal
        open={open}
        message={t('confirmationModal.changeUserStatus')}
        setOpen={setOpen}
        actionHandler={handleAction}
      />
    </>
  );
};

export { UserAdminStatusButton };
