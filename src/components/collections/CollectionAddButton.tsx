import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CollectionForm } from './collectionForm/CollectionForm';

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
            maxWidth: '300px',
          },
        }}
      >
        <DialogTitle>{'Collection form'}</DialogTitle>
        <DialogContent>
          <CollectionForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionAddButton };
