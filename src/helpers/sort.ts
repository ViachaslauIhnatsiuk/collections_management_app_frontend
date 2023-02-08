import { IItem } from '../store/slices/itemSlice/itemModel';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';

type DataToSort = (IItem | ICollection)[];

const sortByTitle = (data: DataToSort, type: string): DataToSort => {
  const dataToSort: DataToSort = [...data];

  switch (type) {
    case 'asc':
      return dataToSort.sort((a, b) =>
        (a.title as string)
          .toLocaleLowerCase()
          .localeCompare((b.title as string).toLocaleLowerCase()),
      );
    case 'desc':
      return dataToSort.sort((a, b) =>
        (b.title as string)
          .toLocaleLowerCase()
          .localeCompare((a.title as string).toLocaleLowerCase()),
      );
    default:
      return dataToSort;
  }
};

export { sortByTitle };
