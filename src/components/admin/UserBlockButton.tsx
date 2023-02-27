import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { BlockButtonProps } from '../../models/componentsProps';
import { useTranslation } from 'react-i18next';

const UserBlockButton: FC<BlockButtonProps> = ({ userId, isBlocked }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleBlockStatus } = useUsers(userId);
  const { t } = useTranslation();

  const handleAction = (): void => {
    toggleBlockStatus();
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color={isBlocked ? 'secondary' : 'default'}
        onClick={() => setOpen(true)}
      >
        <BlockIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={
          isBlocked
            ? t('confirmationModal.unblockUser')
            : t('confirmationModal.blockUser')
        }
        setOpen={setOpen}
        actionHandler={handleAction}
      />
    </>
  );
};

export { UserBlockButton };
