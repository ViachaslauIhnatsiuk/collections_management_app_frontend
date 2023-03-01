import { FC, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { deleteItem } from '../../store/slices/itemSlice/itemSlice';
import { ConfirmationModal } from '../UI/ConfirmationModal';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { IItem } from '../../store/slices/itemSlice/itemModel';
import { useTranslation } from 'react-i18next';

const ItemRemoveButton: FC<{ itemData: IItem }> = ({ itemData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const removeItem = (): void => {
    dispatch(deleteItem(itemData.id as string));
  };

  const isVisible = currentUser._id === itemData.ownerId || currentUser.isAdmin;

  return (
    <>
      <Tooltip title={t('tooltips.deleteItem')}>
        <IconButton
          sx={{ display: isVisible ? 'inline-flex' : 'none' }}
          color="primary"
          onClick={() => setOpen(true)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <ConfirmationModal
        open={open}
        message={t('confirmationModal.deleteItem')}
        setOpen={setOpen}
        actionHandler={removeItem}
      />
    </>
  );
};

export { ItemRemoveButton };
