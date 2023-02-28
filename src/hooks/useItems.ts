import { useCallback } from 'react';
import { selectCollections, selectItems, useAppSelector } from '../store/selectors';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';
import { IItem } from '../store/slices/itemSlice/itemModel';

const useItems = () => {
  const { items, status, error } = useAppSelector(selectItems);
  const { collections } = useAppSelector(selectCollections);

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

  const getLargestCollections = useCallback((): ICollection[] => {
    const itemsCollectionsIds = items.map((item) => item.collectionId);

    const groupedCollectionsIds = itemsCollectionsIds.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    const sortedCollectionsIds = Object.entries(groupedCollectionsIds)
      .sort(([, a], [, b]) => b - a)
      .map((item) => item[0]);

    const largestCollections = sortedCollectionsIds
      .map((id) => collections.find(({ _id }) => _id === id) as ICollection)
      .slice(0, 6);

    return largestCollections;
  }, [items]);

  return { getItemById, getCollectionItems, getLargestCollections, status, error };
};

export { useItems };
