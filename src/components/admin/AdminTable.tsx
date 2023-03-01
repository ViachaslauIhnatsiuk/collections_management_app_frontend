import { FC, useState } from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { UsersManagementButtons } from './UsersManagementButtons';
import { TABLE_PAGE_SIZE, tableRowsPerPage } from '../../constants/commonConstants';
import { usersTableHeaderNames } from '../../constants/renderLists';
import { dataGridStyles } from '../../constants/componentsStyles';
import { IUser } from '../../store/slices/usersSlice/usersModel';

const AdminTable: FC<{ users: IUser[] }> = ({ users }) => {
  const [pageSize, setPageSize] = useState<number>(TABLE_PAGE_SIZE);

  const rows = users.map((user) => ({ id: user._id, ...user }));
  const columns = usersTableHeaderNames.map((name) => {
    if (name.field === 'actions') {
      return {
        ...name,
        renderCell: (params: GridCellParams) => {
          return <UsersManagementButtons userData={params.row} />;
        },
      };
    }
    return name;
  });

  return (
    <Paper>
      <DataGrid
        sx={dataGridStyles}
        rowHeight={35}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={tableRowsPerPage}
        disableSelectionOnClick
        autoHeight
      />
    </Paper>
  );
};

export { AdminTable };
