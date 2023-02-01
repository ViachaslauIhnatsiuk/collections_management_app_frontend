import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { resetUserState } from '../../../store/slices/userSlice/userSlice';

const HeaderAuthButtons: FC = () => {
  const { isAuth } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const signOut = (): void => {
    dispatch(resetUserState());
  };

  return (
    <Box sx={{ display: 'flex', columnGap: 2 }}>
      {isAuth ? (
        <Button variant="contained" size="small" onClick={signOut}>
          Sign Out
        </Button>
      ) : (
        <>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small">
              Sign In
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small">
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
};

export { HeaderAuthButtons };
