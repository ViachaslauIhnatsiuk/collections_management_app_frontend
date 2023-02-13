import { FC, useState } from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { UsersManagementButtons } from './UsersManagementButtons';
import { usersTableHeaderNames } from '../../helpers/usersTableHeaderNames';
import { dataGridStyles } from '../../constants/componentsStyles';
import { IUser } from '../../store/slices/usersSlice/usersModel';

const AdminTable: FC<{ users: IUser[] }> = ({ users }) => {
  const [pageSize, setPageSize] = useState<number>(5);

  const columns = usersTableHeaderNames.map((name) => {
    if (name.field === 'actions') {
      return {
        ...name,
        width: 200,
        renderCell: (params: GridCellParams) => {
          return <UsersManagementButtons userId={String(params.id)} />;
        },
      };
    }
    return name;
  });

  return (
    <Paper sx={{ maxHeight: 600, width: '100%' }}>
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
