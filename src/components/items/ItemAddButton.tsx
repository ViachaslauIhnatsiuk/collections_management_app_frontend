import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ItemForm } from './itemForm/ItemForm';

const ItemAddButton: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();

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
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
          },
        }}
      >
        <DialogTitle>{'Item create form'}</DialogTitle>
        <DialogContent>
          <ItemForm value="Create item" collectionId={id as string} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemAddButton };
