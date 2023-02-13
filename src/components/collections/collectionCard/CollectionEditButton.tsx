import { FC, useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { CollectionForm } from '../collectionForm/CollectionForm';

const CollectionEditButton: FC<{ id: string; ownerId: string }> = ({ id, ownerId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);

  return (
    <>
      <IconButton
        sx={{ visibility: currentUser.id === ownerId ? 'visible' : 'hidden' }}
        color="primary"
        onClick={() => setOpen(true)}
      >
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
        <DialogTitle>{'Collection edit form'}</DialogTitle>
        <DialogContent>
          <CollectionForm id={id} value="Edit collection" setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { CollectionEditButton };
