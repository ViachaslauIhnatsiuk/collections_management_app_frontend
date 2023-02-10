import { FC } from 'react';
import { UserAdminStatusButton } from './UserAdminStatusButton';
import { UserBlockButton } from './UserBlockButton';
import { UserRemoveButton } from './UserRemoveButton';
import { UserViewButton } from './UserViewButton';

const UsersManagementButtons: FC<{ userId: string }> = ({ userId }) => {
  return (
    <>
      <UserRemoveButton userId={userId} />
      <UserBlockButton userId={userId} />
      <UserAdminStatusButton userId={userId} />
      <UserViewButton userId={userId} />
    </>
  );
};

export { UsersManagementButtons };
