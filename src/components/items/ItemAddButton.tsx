import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const ItemAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Add item
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
        <DialogTitle>{'Item form'}</DialogTitle>
        <DialogContent>{/* <ItemCreationForm setOpen={setOpen} /> */}</DialogContent>
      </Dialog>
    </>
  );
};

export { ItemAddButton };
