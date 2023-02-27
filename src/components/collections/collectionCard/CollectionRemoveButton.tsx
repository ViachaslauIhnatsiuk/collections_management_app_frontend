import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/store';
import { deleteCollection } from '../../../store/slices/collectionSlice/collectionSlice';
import { ConfirmationModal } from '../../UI/ConfirmationModal';
import { useTranslation } from 'react-i18next';

const CollectionRemoveButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const removeCollection = (): void => {
    dispatch(deleteCollection(id));
  };

  return (
    <>
      <IconButton sx={{ p: 0.5 }} color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon sx={{ width: 20 }} />
      </IconButton>
      <ConfirmationModal
        open={open}
        message={t('confirmationModal.deleteCollection')}
        setOpen={setOpen}
        actionHandler={removeCollection}
      />
    </>
  );
};

export { CollectionRemoveButton };
