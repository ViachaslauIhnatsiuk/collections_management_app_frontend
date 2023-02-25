import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ItemForm } from './itemForm/ItemForm';
import { selectAuth, useAppSelector } from '../../store/selectors';

const ItemAddButton: FC<{ ownerId: string }> = ({ ownerId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useAppSelector(selectAuth);
  const { id } = useParams();

  return (
    <>
      <Button
        sx={{ mt: 2, visibility: currentUser.id === ownerId ? 'visible' : 'hidden' }}
        variant="contained"
        size="small"
        onClick={() => setOpen(true)}
      >
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
