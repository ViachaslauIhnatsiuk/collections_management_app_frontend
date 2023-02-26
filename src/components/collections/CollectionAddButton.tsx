import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { CollectionForm } from './collectionForm/CollectionForm';

const CollectionAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<AddToPhotosIcon />}
        onClick={() => setOpen(true)}
      >
        Add collection
      </Button>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
            m: 2,
          },
        }}
      >
        <DialogTitle sx={{ pb: 0, textAlign: 'center' }}>{'Collection form'}</DialogTitle>
        <DialogContent>
          <CollectionForm value="Create collection" setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionAddButton };
