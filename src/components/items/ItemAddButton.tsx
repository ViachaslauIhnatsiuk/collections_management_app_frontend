import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ItemForm } from './itemForm/ItemForm';

const ItemAddButton: FC<{ itemId: string }> = ({ itemId }) => {
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
        <DialogTitle>{'Item create form'}</DialogTitle>
        <DialogContent>
          <ItemForm
            value="Create item"
            itemId={itemId}
            setOpen={setOpen}
            id={currentId}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemAddButton };
