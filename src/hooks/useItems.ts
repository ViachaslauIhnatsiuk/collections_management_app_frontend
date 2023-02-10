import { useCallback } from 'react';
import { selectItems, useAppSelector } from '../store/selectors';
import { IItem } from '../store/slices/itemSlice/itemModel';

const useItems = () => {
  const { items, status, error } = useAppSelector(selectItems);

  const getItemById = useCallback(
    (itemId: string): IItem => {
      const item = items.find(({ _id }) => _id === itemId);
      return item as IItem;
    },
    [items],
  );

  const getCollectionItems = useCallback(
    (collectionId: string): IItem[] =>
      items.filter((item) => item.collectionId === collectionId),
    [items],
  );

  return { getItemById, getCollectionItems, status, error };
};

export { useItems };
