import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ItemForm } from './itemForm/ItemForm';

const ItemEditButton: FC<{ itemId: string }> = ({ itemId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const currentId = pathname.split('/')[2];

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
        aria-describedby="alert-dialog"
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
          },
        }}
      >
        <DialogTitle>{'Item edit form'}</DialogTitle>
        <DialogContent>
          <ItemForm value="Edit item" itemId={itemId} id={currentId} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemEditButton };
