import { useCallback } from 'react';
import { selectAuth, selectUsers, useAppSelector } from '../store/selectors';
import { resetAuthState } from '../store/slices/authSlice/authSlice';
import { IUser } from '../store/slices/usersSlice/usersModel';
import { deleteUser, updateUser } from '../store/slices/usersSlice/usersSlice';
import { useAppDispatch } from '../store/store';

const useUsers = (userId: string) => {
  const { users } = useAppSelector(selectUsers);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const getUserById = useCallback(
    (userId: string): IUser => {
      const user = users.find(({ id }) => id === userId);
      return user as IUser;
    },
    [users],
  );

  const removeUser = (): void => {
    dispatch(deleteUser(userId));
    if (currentUser.id === userId) dispatch(resetAuthState());
  };

  const toggleBlockStatus = (): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isBlocked: !user.isBlocked };
    dispatch(updateUser(updatedUserData));
    if (currentUser.id === userId) dispatch(resetAuthState());
  };

  const toggleAdminStatus = (): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isAdmin: !user.isAdmin };
    dispatch(updateUser(updatedUserData));
  };

  return { getUserById, removeUser, toggleBlockStatus, toggleAdminStatus };
};

export { useUsers };
