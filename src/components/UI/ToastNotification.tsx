import { FC, useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { selectAuth, useAppSelector } from '../../store/selectors';

const ToastNotification: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const auth = useAppSelector(selectAuth);

  useEffect(() => {
    if (auth.status === 'rejected') {
      setIsOpen(true);
    }
  }, [auth.status]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={4000}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      key={auth.error}
    >
      <Alert onClose={() => setIsOpen(false)} severity="error" sx={{ width: '100%' }}>
        {auth.error}
      </Alert>
    </Snackbar>
  );
};

export { ToastNotification };
