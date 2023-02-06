import { FC, useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ItemEditButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);

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
        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
};

export { ItemEditButton };
