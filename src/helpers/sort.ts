import { IItem } from '../store/slices/itemSlice/itemModel';
import { ICollection } from '../store/slices/collectionSlice/collectionModel';

type DataToSort = (IItem | ICollection)[];

const sortByTitle = (data: DataToSort, type: string): DataToSort => {
  const dataToSort: DataToSort = [...data];

  switch (type) {
    case 'asc':
      return dataToSort.sort((a, b) =>
        a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()),
      );
    case 'desc':
      return dataToSort.sort((a, b) =>
        b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase()),
      );
    default:
      return dataToSort;
  }
};

export { sortByTitle };
