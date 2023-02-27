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
import { useTranslation } from 'react-i18next';

const ConfirmationModal: FC<ConfirmationModalProps> = (props) => {
  const { open, message, setOpen, actionHandler } = props;
  const { t } = useTranslation();

  const closeDialog = (): void => {
    setOpen(false);
  };

  return (
    <Dialog transitionDuration={400} open={open} keepMounted onClose={closeDialog}>
      <DialogTitle>{t('confirmationModal.actionConfirmation')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t('confirmationModal.message')} {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>{t('confirmationModal.no')}</Button>
        <Button onClick={actionHandler}>{t('confirmationModal.yes')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationModal };
