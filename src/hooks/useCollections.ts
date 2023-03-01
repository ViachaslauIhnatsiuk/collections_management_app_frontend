import { useCallback } from 'react';
import { sortByTitle } from '../helpers/sort';
import { selectAuth, selectCollections, useAppSelector } from '../store/selectors';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';

const useCollections = () => {
  const { currentUser } = useAppSelector(selectAuth);
  const { collections, status, error } = useAppSelector(selectCollections);

  const getCollectionById = useCallback(
    (collectionId: string): ICollection => {
      const collection = collections.find(({ _id }) => _id === collectionId);
      return collection as ICollection;
    },
    [collections],
  );

  const getAllCollections = useCallback(
    (filteredCollections: string, sortType: string): ICollection[] => {
      const collectionsToSort = collections.filter(({ title }) =>
        title.toLowerCase().includes(filteredCollections.toLowerCase()),
      );
      return sortByTitle(collectionsToSort, sortType) as ICollection[];
    },
    [collections],
  );

  const getUserPageCollections = useCallback(
    (
      filteredCollections: string,
      sortType: string,
      filterUser: string,
    ): ICollection[] => {
      const filtered = collections.filter(
        ({ title, ownerId }) =>
          (title.toLowerCase().includes(filteredCollections.toLowerCase()) &&
            ownerId === currentUser._id) ||
          (title.toLowerCase().includes(filteredCollections.toLowerCase()) &&
            currentUser.isAdmin),
      );

      const collectionsToSort =
        filterUser !== 'All'
          ? filtered.filter(({ ownerId }) => ownerId === filterUser)
          : filtered;

      return sortByTitle(collectionsToSort, sortType) as ICollection[];
    },
    [collections, currentUser],
  );

  return { getCollectionById, getAllCollections, getUserPageCollections, status, error };
};

export { useCollections };
