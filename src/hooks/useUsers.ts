import { useCallback } from 'react';
import { selectUsers, useAppSelector } from '../store/selectors';
import { IUser } from '../store/slices/usersSlice/usersModel';

const useUsers = () => {
  const { users } = useAppSelector(selectUsers);

  const getUserById = useCallback(
    (userId: string): IUser => {
      const user = users.find(({ id }) => id === userId);
      return user as IUser;
    },
    [users],
  );

  return { getUserById };
};

export { useUsers };
