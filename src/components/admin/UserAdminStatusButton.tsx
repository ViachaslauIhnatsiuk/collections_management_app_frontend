import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useAppDispatch } from '../../store/store';
import { deleteItem } from '../../store/slices/itemSlice/itemSlice';
import { RemoveConfirmationModal } from '../UI/RemoveConfirmationModal';

const UserAdminStatusButton: FC<{ userId: string }> = ({ userId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const removeCollection = (): void => {
    dispatch(deleteItem(userId));
  };

  return (
    <>
      <IconButton aria-label="delete" color="primary" onClick={() => setOpen(true)}>
        <AdminPanelSettingsIcon />
      </IconButton>
      <RemoveConfirmationModal
        open={open}
        setOpen={setOpen}
        actionHandler={removeCollection}
      />
    </>
  );
};

export { UserAdminStatusButton };
