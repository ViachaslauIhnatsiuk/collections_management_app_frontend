import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';
import { BlockButtonProps } from '../../models/adminButtonsProps';

const UserBlockButton: FC<BlockButtonProps> = ({ userId, isBlocked }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleBlockStatus } = useUsers(userId);

  return (
    <>
      <IconButton color={isBlocked ? 'error' : 'success'} onClick={() => setOpen(true)}>
        <BlockIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={
          isBlocked ? ConfirmationMessages.unblockUser : ConfirmationMessages.blockUser
        }
        setOpen={setOpen}
        actionHandler={toggleBlockStatus}
      />
    </>
  );
};

export { UserBlockButton };
