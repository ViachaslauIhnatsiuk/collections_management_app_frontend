import { FC, useState } from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { UsersManagementButtons } from './UsersManagementButtons';
import { usersTableHeaderNames } from '../../helpers/usersTableHeaderNames';
import { dataGridStyles } from '../../constants/componentsStyles';
import { IUser } from '../../store/slices/usersSlice/usersModel';

const AdminTable: FC<{ users: IUser[] }> = ({ users }) => {
  const [pageSize, setPageSize] = useState<number>(10);

  const columns = usersTableHeaderNames.map((name) => {
    if (name.field === 'actions') {
      return {
        ...name,
        width: 200,
        renderCell: (params: GridCellParams) => {
          return <UsersManagementButtons userData={params.row} />;
        },
      };
    }
    return name;
  });

  return (
    <Paper sx={{ width: '100%' }}>
      <DataGrid
        sx={dataGridStyles}
        rowHeight={35}
        rows={users}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        disableSelectionOnClick
        autoHeight
      />
    </Paper>
  );
};

export { AdminTable };
