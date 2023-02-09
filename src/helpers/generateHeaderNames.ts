import { GridColDef } from '@mui/x-data-grid';
import { IItem } from '../store/slices/itemSlice/itemModel';

export const generateHeaderNames = (item: IItem) => {
  const {
    _id,
    createdAt,
    updatedAt,
    collectionId,
    ownerId,
    comments,
    likes,
    ...tableItems
  } = item;

  const headerNamesList = [...Object.keys(tableItems), 'Actions'];
  const columns: GridColDef[] = headerNamesList.map((item) => ({
    field: item,
    headerName: item.charAt(0).toUpperCase() + item.slice(1),
    type: typeof tableItems[item] === 'boolean' ? 'boolean' : 'string',
  }));

  return columns;
};
