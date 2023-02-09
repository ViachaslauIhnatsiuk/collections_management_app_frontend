import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CollectionForm } from './collectionForm/CollectionForm';

const CollectionAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Add collection
      </Button>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog"
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
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
