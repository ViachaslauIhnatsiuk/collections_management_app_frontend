import { FC } from 'react';
import { Box } from '@mui/material';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { HeaderAuthButton } from './HeaderAuthButton';
import { useAppDispatch } from '../../../store/store';
import { resetAuthState } from '../../../store/slices/authSlice/authSlice';
import { useTranslation } from 'react-i18next';

const HeaderAuthButtons: FC = () => {
  const { isAuth } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const signOut = (): void => {
    dispatch(resetAuthState());
  };

  return (
    <Box sx={{ display: 'flex', columnGap: 2 }}>
      {isAuth ? (
        <HeaderAuthButton value={t('header.signOut')} path="/signin" handler={signOut} />
      ) : (
        <>
          <HeaderAuthButton value={t('header.signIn')} path="/signin" />
          <HeaderAuthButton value={t('header.signUp')} path="/signup" />
        </>
      )}
    </Box>
  );
};

export { HeaderAuthButtons };
