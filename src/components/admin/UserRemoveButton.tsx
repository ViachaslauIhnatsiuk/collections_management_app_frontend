import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { useTranslation } from 'react-i18next';

const UserRemoveButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { removeUser } = useUsers(userId);
  const { t } = useTranslation();

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={t('confirmationModal.deleteUser')}
        setOpen={setOpen}
        actionHandler={removeUser}
      />
    </>
  );
};

export { UserRemoveButton };
