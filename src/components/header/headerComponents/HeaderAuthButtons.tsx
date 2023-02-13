import { FC } from 'react';
import { Box } from '@mui/material';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { HeaderAuthButton } from './HeaderAuthButton';
import { useAppDispatch } from '../../../store/store';
import { resetAuthState } from '../../../store/slices/authSlice/authSlice';

const HeaderAuthButtons: FC = () => {
  const { isAuth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const signOut = (): void => {
    dispatch(resetAuthState());
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
