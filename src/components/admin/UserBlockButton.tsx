import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';

const UserBlockButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleBlockStatus } = useUsers(userId);

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <BlockIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.blockUser}
        setOpen={setOpen}
        actionHandler={toggleBlockStatus}
      />
    </>
  );
};

export { UserBlockButton };
