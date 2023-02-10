import { useCallback } from 'react';
import { selectCollections, useAppSelector } from '../store/selectors';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';

const useCollections = () => {
  const { collections, status, error } = useAppSelector(selectCollections);

  const getCollectionById = useCallback(
    (collectionId: string): ICollection => {
      const collection = collections.find(({ _id }) => _id === collectionId);
      return collection as ICollection;
    },
    [collections],
  );

  return { getCollectionById, status, error };
};

export { useCollections };
