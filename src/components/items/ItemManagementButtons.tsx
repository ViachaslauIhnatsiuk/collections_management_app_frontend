import { FC } from 'react';
import { ItemEditButton } from './ItemEditButton';
import { ItemRemoveButton } from './ItemRemoveButton';
import { ItemViewButton } from './ItemViewButton';

const ItemManagementButtons: FC<{ itemId: string }> = ({ itemId }) => {
  return (
    <>
      <ItemRemoveButton itemId={itemId} />
      <ItemEditButton itemId={itemId} />
      <ItemViewButton itemId={itemId} />
    </>
  );
};

export { ItemManagementButtons };
