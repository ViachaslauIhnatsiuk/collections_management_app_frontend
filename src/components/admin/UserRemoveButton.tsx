import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUsers } from '../../hooks/useUsers';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { ConfirmationMessages } from '../../models/componentsModels';

const UserRemoveButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { removeUser } = useUsers(userId);

  return (
    <>
      <IconButton color="info" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={ConfirmationMessages.deleteUser}
        setOpen={setOpen}
        actionHandler={removeUser}
      />
    </>
  );
};

export { UserRemoveButton };
