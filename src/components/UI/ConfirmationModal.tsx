import { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ConfirmationModalProps } from '../../models/componentsProps';

const ConfirmationModal: FC<ConfirmationModalProps> = (props) => {
  const { open, message, setOpen, actionHandler } = props;

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
          Do you really want to {message}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>No</Button>
        <Button onClick={actionHandler}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationModal };
