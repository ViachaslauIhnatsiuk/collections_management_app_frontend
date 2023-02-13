import { FC } from 'react';
import { ItemEditButton } from './ItemEditButton';
import { ItemRemoveButton } from './ItemRemoveButton';
import { ItemViewButton } from './ItemViewButton';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemManagementButtons: FC<{ itemData: IItem }> = ({ itemData }) => {
  return (
    <>
      <ItemRemoveButton itemData={itemData} />
      <ItemEditButton itemData={itemData} />
      <ItemViewButton itemId={itemData.id as string} />
    </>
  );
};

export { ItemManagementButtons };
