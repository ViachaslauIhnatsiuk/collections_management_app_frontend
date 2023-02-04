import { FC, useState } from 'react';
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/store';
import { deleteCollection } from '../../../store/slices/collectionSlice/collectionSlice';

const CollectionRemoveButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const removeCollection = (): void => {
    dispatch(deleteCollection(id));
  };

  const closeDialog = (): void => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="delete" color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={closeDialog}
        aria-describedby="alert-dialog"
      >
        <DialogTitle>{'Action confirmation'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog">
            Do you really want to do this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>No</Button>
          <Button onClick={removeCollection}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { CollectionRemoveButton };
