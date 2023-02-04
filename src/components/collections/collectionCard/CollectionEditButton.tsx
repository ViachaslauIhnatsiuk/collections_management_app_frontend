import { FC, useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CollectionEditForm } from '../collectionForm/CollectionEditForm';

const CollectionEditButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton aria-label="delete" color="primary" onClick={() => setOpen(true)}>
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
        <DialogTitle>{'Collection edit form'}</DialogTitle>
        <DialogContent>
          <CollectionEditForm id={id} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionEditButton };
