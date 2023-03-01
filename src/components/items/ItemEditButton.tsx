import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, IconButton, Tooltip } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ItemForm } from './itemForm/ItemForm';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { IItem } from '../../store/slices/itemSlice/itemModel';
import { useTranslation } from 'react-i18next';

const ItemEditButton: FC<{ itemData: IItem }> = ({ itemData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();
  const { currentUser } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  return (
    <>
      <Tooltip title={t('tooltips.editItem')}>
        <IconButton
          sx={{
            display:
              currentUser._id === itemData.ownerId || currentUser.isAdmin
                ? 'inline-flex'
                : 'none',
          }}
          color="primary"
          onClick={() => setOpen(true)}
        >
          <BorderColorIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
          },
        }}
      >
        <DialogTitle sx={{ pb: 0, textAlign: 'center' }}>
          {t('items.itemEditFormTitle')}
        </DialogTitle>
        <DialogContent>
          <ItemForm
            value={t('items.editItemButton')}
            itemId={itemData.id as string}
            collectionId={id as string}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemEditButton };
