import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ItemForm } from './itemForm/ItemForm';

const ItemEditButton: FC<{ itemId: string }> = ({ itemId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();

  return (
    <>
      <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
        <BorderColorIcon />
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
        <DialogTitle>{'Item edit form'}</DialogTitle>
        <DialogContent>
          <ItemForm
            value="Edit item"
            itemId={itemId}
            collectionId={id as string}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemEditButton };
