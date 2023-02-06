import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ItemCreationForm } from './itemForm/ItemCreationForm';

const ItemAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const currentId = pathname.split('/')[2];

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
        <DialogContent>
          <ItemCreationForm setOpen={setOpen} id={currentId} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemAddButton };
