import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CollectionCreationForm } from './collectionForm/CollectionCreationForm';

const CollectionAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDialog = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Add collection
      </Button>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={closeDialog}
        aria-describedby="alert-dialog"
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
          },
        }}
      >
        <DialogTitle>{'Collection form'}</DialogTitle>
        <DialogContent>
          <CollectionCreationForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionAddButton };
