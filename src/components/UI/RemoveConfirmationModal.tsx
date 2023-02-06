import { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { RemoveConfirmationModalProps } from '../../models/componentsProps';

const RemoveConfirmationModal: FC<RemoveConfirmationModalProps> = (props) => {
  const { open, setOpen, actionHandler } = props;

  const closeDialog = (): void => {
    setOpen(false);
  };

  return (
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
        <Button onClick={actionHandler}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export { RemoveConfirmationModal };
