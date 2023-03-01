import { GridAlignment } from '@mui/x-data-grid';

export const usersTableHeaderNames = [
  { field: 'name', headerName: 'Name', type: 'string', flex: 1, minWidth: 100 },
  { field: 'email', headerName: 'Email', type: 'string', flex: 1, minWidth: 100 },
  {
    field: 'isBlocked',
    headerName: 'IsBlocked',
    type: 'boolean',
    flex: 1,
    minWidth: 100,
  },
  { field: 'isAdmin', headerName: 'IsAdmin', type: 'boolean', flex: 1, minWidth: 100 },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'string',
    headerAlign: 'center' as GridAlignment,
    align: 'center' as GridAlignment,
    flex: 1,
    minWidth: 150,
  },
];

const collectionTopics = [
  'Paper money',
  'Coins',
  'Model cars',
  'Books',
  'Baseball cards',
  'Stamps',
  'Fridge magnets',
];

const collectionExtraFieldsTypes = ['number', 'text', 'textfield', 'date', 'checkbox'];

const cloudTagsPalette = [
  '#1d4348',
  '#6be8ff',
  '#173a3e',
  '#00c6eb',
  '#05d9ff',
  '#234d51',
  '#476e72',
  '#0e292e',
  '#68878b',
  '#becccd',
  '#275459',
  '#38e0ff',
  '#e5eaeb',
  '#93aaac',
];

export { collectionTopics, collectionExtraFieldsTypes, cloudTagsPalette };
