import { FC } from 'react';
import { Box } from '@mui/material';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { resetUserState } from '../../../store/slices/authSlice/authSlice';
import { HeaderAuthButton } from './HeaderAuthButton';

const HeaderAuthButtons: FC = () => {
  const { isAuth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const signOut = (): void => {
    dispatch(resetUserState());
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
