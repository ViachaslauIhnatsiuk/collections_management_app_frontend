import { FC, useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CollectionForm } from '../collectionForm/CollectionForm';
import { useTranslation } from 'react-i18next';

const CollectionEditButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      <IconButton sx={{ p: 0.5 }} color="primary" onClick={() => setOpen(true)}>
        <BorderColorIcon sx={{ width: 18 }} />
      </IconButton>
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
          {t('collectionForm.collectionEditFormTitle')}
        </DialogTitle>
        <DialogContent>
          <CollectionForm
            id={id}
            type="edit"
            value={t('collectionForm.editCollectionButton')}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionEditButton };
