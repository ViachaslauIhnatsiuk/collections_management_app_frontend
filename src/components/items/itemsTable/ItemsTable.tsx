import { FC, useState } from 'react';
import { DataGrid, GridAlignment, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { ItemManagementButtons } from '../ItemManagementButtons';
import { ItemsTableToolbar } from './ItemsTableToolbar';
import { generateHeaderNames } from '../../../helpers/generateHeaderNames';
import { dataGridStyles } from '../../../constants/componentsStyles';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { TABLE_PAGE_SIZE, tableRowsPerPage } from '../../../constants/commonConstants';

const ItemsTable: FC<{ collectionItems: IItem[] }> = ({ collectionItems }) => {
  const [pageSize, setPageSize] = useState<number>(TABLE_PAGE_SIZE);

  const rows = collectionItems.map((item) => ({ id: item._id, ...item }));
  const columns = generateHeaderNames(collectionItems[0]).map((column) => {
    if (column.field === 'Actions') {
      return {
        ...column,
        width: 150,
        align: 'center' as GridAlignment,
        headerAlign: 'center' as GridAlignment,
        renderCell: (params: GridCellParams) => {
          return <ItemManagementButtons itemData={params.row} />;
        },
      };
    }
    return column;
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
        components={{ Toolbar: ItemsTableToolbar }}
      />
    </Paper>
  );
};

export { ItemsTable };
