import { FC } from 'react';
import { UserAdminStatusButton } from './UserAdminStatusButton';
import { UserBlockButton } from './UserBlockButton';
import { UserRemoveButton } from './UserRemoveButton';
import { IUser } from '../../store/slices/usersSlice/usersModel';

const UsersManagementButtons: FC<{ userData: IUser }> = ({ userData }) => {
  return (
    <>
      <UserRemoveButton userId={userData.id} />
      <UserBlockButton userId={userData.id} isBlocked={userData.isBlocked} />
      <UserAdminStatusButton userId={userData.id} isAdmin={userData.isAdmin} />
    </>
  );
};

export { UsersManagementButtons };
