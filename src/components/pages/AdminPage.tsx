import { FC, useEffect } from 'react';
import { Container } from '@mui/material';
import { Loader } from '../UI/Loader';
import { AdminTable } from '../admin/AdminTable';
import { selectUsers, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getUsers } from '../../store/slices/usersSlice/usersSlice';

const AdminPage: FC = () => {
  const { users, status, error } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Loader status={status} error={error} />
      {!error && (
        <Container sx={{ pt: 3 }}>
          <AdminTable users={users} />
        </Container>
      )}
    </>
  );
};

export { AdminPage };
