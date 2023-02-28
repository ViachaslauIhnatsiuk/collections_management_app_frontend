import { useCallback } from 'react';
import { selectCollections, selectItems, useAppSelector } from '../store/selectors';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';
import { groupElementsBySize } from '../helpers/groupElements';
import { cloudTagsPalette } from '../constants/renderLists';
import { IItem } from '../store/slices/itemSlice/itemModel';
import { ICloudTag } from '../models/componentsModels';
import {
  MAX_COLLECTIONS_LENGTH,
  MAX_CLOUD_TAGS_LENGTH,
  MIN_LIST_LENGTH,
} from '../constants/commonConstants';

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

  const getCloudTagsFromItems = useCallback((): ICloudTag[] => {
    const itemsTags = items.map((item) => item.tags).flat();

    const groupedTags = groupElementsBySize(itemsTags);

    const tagsList = Object.entries(groupedTags)
      .sort(([, a], [, b]) => b - a)
      .slice(MIN_LIST_LENGTH, MAX_CLOUD_TAGS_LENGTH);

    const cloudTagsList = tagsList.map(([value, count], index) => ({
      value,
      count,
      props: {
        style: {
          cursor: 'pointer',
          color: cloudTagsPalette[index],
        },
      },
    }));

    return cloudTagsList;
  }, [items]);

  const getLargestCollections = useCallback((): ICollection[] => {
    const itemsCollectionsIds = items.map((item) => item.collectionId);

    const groupedCollectionsIds = groupElementsBySize(itemsCollectionsIds);

    const sortedCollectionsIds = Object.entries(groupedCollectionsIds)
      .sort(([, a], [, b]) => b - a)
      .map(([id]) => id);

    const largestCollections = sortedCollectionsIds
      .map((id) => collections.find(({ _id }) => _id === id) as ICollection)
      .slice(MIN_LIST_LENGTH, MAX_COLLECTIONS_LENGTH);

    return largestCollections;
  }, [items]);

  return {
    getItemById,
    getCollectionItems,
    getCloudTagsFromItems,
    getLargestCollections,
    status,
    error,
  };
};

export { useItems };
