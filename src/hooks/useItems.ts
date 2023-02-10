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
    const itemsCollectionsIds = items.map((item) => item.collectionId as string);

    const groupedCollectionsIds = itemsCollectionsIds.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    const sortedCollectionsIds = Object.keys(groupedCollectionsIds).sort(
      (a, b) => groupedCollectionsIds[a] - groupedCollectionsIds[b],
    );

    const largestCollections = collections
      .filter(({ _id }) => sortedCollectionsIds.includes(_id as string))
      .slice(0, 5);

    return largestCollections;
  }, [items]);

  return { getItemById, getCollectionItems, getLargestCollections, status, error };
};

export { useItems };
