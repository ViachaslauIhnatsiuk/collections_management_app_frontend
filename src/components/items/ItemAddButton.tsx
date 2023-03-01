import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ItemForm } from './itemForm/ItemForm';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { useTranslation } from 'react-i18next';

const ItemAddButton: FC<{ ownerId: string }> = ({ ownerId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const { id } = useParams();
  const { t } = useTranslation();

  const isVisible = currentUser._id === ownerId || currentUser.isAdmin;

  return (
    <>
      <Button
        sx={{ mt: 2, visibility: isVisible ? 'visible' : 'hidden' }}
        variant="contained"
        size="small"
        onClick={() => setOpen(true)}
      >
        {t('items.addItemButton')}
      </Button>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{ '& .MuiDialog-paper': { maxWidth: '350px', m: 2 } }}
      >
        <DialogTitle sx={{ pb: 0, textAlign: 'center' }}>
          {t('items.itemCreationFormTitle')}
        </DialogTitle>
        <DialogContent>
          <ItemForm
            type="create"
            value={t('items.createItemButton')}
            collectionId={id as string}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemAddButton };
