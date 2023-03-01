import { useCallback } from 'react';
import { selectAuth, selectUsers, useAppSelector } from '../store/selectors';
import { deleteUser, updateUser } from '../store/slices/usersSlice/usersSlice';
import { resetAuthState } from '../store/slices/authSlice/authSlice';
import { useAppDispatch } from '../store/store';
import { IUser } from '../store/slices/usersSlice/usersModel';

const useUsers = (userId: string) => {
  const { users } = useAppSelector(selectUsers);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const getUserById = useCallback(
    (userId: string): IUser => {
      const user = users.find(({ _id }) => _id === userId);
      return user as IUser;
    },
    [users],
  );

  const removeUser = useCallback((): void => {
    dispatch(deleteUser(userId));

    if (currentUser._id === userId) dispatch(resetAuthState());
  }, [users]);

  const toggleBlockStatus = useCallback((): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isBlocked: !user.isBlocked };

    dispatch(updateUser(updatedUserData));
    if (currentUser._id === userId) dispatch(resetAuthState());
  }, [users]);

  const toggleAdminStatus = useCallback((): void => {
    const user = getUserById(userId);
    const updatedUserData = { ...user, isAdmin: !user.isAdmin };

    dispatch(updateUser(updatedUserData));
  }, [users]);

  return {
    getUserById,
    removeUser,
    toggleBlockStatus,
    toggleAdminStatus,
  };
};

export { useUsers };
