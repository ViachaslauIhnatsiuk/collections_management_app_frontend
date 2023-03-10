import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { CollectionForm } from './collectionForm/CollectionForm';
import { useTranslation } from 'react-i18next';

const CollectionAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<AddToPhotosIcon />}
        onClick={() => setOpen(true)}
      >
        {t('collections.addCollectionButton')}
      </Button>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{ '& .MuiDialog-paper': { maxWidth: '350px', m: 2 } }}
      >
        <DialogTitle sx={{ pb: 0, textAlign: 'center' }}>
          {t('collectionForm.collectionCreactionFormTitle')}
        </DialogTitle>
        <DialogContent>
          <CollectionForm
            type="create"
            value={t('collectionForm.createCollectionButton')}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionAddButton };
