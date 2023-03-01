import { FC, useEffect } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Loader } from '../UI/Loader';
import { AdminTable } from '../admin/AdminTable';
import { selectUsers, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getUsers } from '../../store/slices/usersSlice/usersSlice';
import { useTranslation } from 'react-i18next';

const AdminPage: FC = () => {
  const { users, status, error } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Loader status={status} error={error} />
      {!error && (
        <Container sx={{ pt: 3 }}>
          <Stack sx={{ width: '100%', gap: 2 }}>
            <Typography sx={{ fontSize: 30, textAlign: 'center' }}>
              {t('adminPage.title')}
            </Typography>
            <AdminTable users={users} />
          </Stack>
        </Container>
      )}
    </>
  );
};

export { AdminPage };
