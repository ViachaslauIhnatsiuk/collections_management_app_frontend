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
