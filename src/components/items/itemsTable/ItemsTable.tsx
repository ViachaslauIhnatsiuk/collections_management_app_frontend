import { FC, useState } from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { ItemManagementButtons } from '../ItemManagementButtons';
import { generateHeaderNames } from '../../../helpers/generateHeaderNames';
import { dataGridStyles } from '../../../constants/componentsStyles';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const ItemsTable: FC<{ itemsToRender: IItem[] }> = ({ itemsToRender }) => {
  const [pageSize, setPageSize] = useState<number>(5);

  const rows = itemsToRender.map((item) => ({ id: item._id, ...item }));
  const columns = generateHeaderNames(itemsToRender[0]).map((column) => {
    if (column.field === 'Actions') {
      return {
        ...column,
        width: 150,
        renderCell: (params: GridCellParams) => {
          return <ItemManagementButtons itemId={String(params.id)} />;
        },
      };
    }
    return column;
  });

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={dataGridStyles}
        rowHeight={35}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        disableSelectionOnClick
      />
    </Paper>
  );
};

export { ItemsTable };
