import { FC } from 'react';
import { Box } from '@mui/material';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { HeaderAuthButton } from './HeaderAuthButton';
import { useResetState } from '../../../hooks/useResetState';

const HeaderAuthButtons: FC = () => {
  const { isAuth } = useAppSelector(selectAuth);
  const resetAppState = useResetState();

  const signOut = (): void => {
    resetAppState();
  };

  return (
    <Box sx={{ display: 'flex', columnGap: 2 }}>
      {isAuth ? (
        <HeaderAuthButton value="Sign Out" path="/signin" handler={signOut} />
      ) : (
        <>
          <HeaderAuthButton value="Sign In" path="/signin" />
          <HeaderAuthButton value="Sign Up" path="/signup" />
        </>
      )}
    </Box>
  );
};

export { HeaderAuthButtons };
