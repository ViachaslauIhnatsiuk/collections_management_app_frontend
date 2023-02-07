import { FC, useState } from 'react';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { ItemRemoveButton } from '../ItemRemoveButton';
import { ItemEditButton } from '../ItemEditButton';
import { ItemViewButton } from '../ItemViewButton';
import { ItemsTableProps } from '../../../models/itemsTableProps';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const ItemsTable: FC<ItemsTableProps> = ({ itemsToRender }) => {
  const [pageSize, setPageSize] = useState<number>(5);
  const rows = itemsToRender.map((item) => ({ id: item._id, ...item }));

  const generateHeaderNames = (item: IItem) => {
    const { _id, collectionId, ownerId, comments, ...tableItems } = item;
    const headerNamesList = [...Object.keys(tableItems), 'Actions'];
    const columns: GridColDef[] = headerNamesList.map((item) => ({
      field: item,
      headerName: item.charAt(0).toUpperCase() + item.slice(1),
      type: typeof tableItems[item] === 'boolean' ? 'boolean' : 'string',
    }));

    return columns.map((column) => {
      if (column.field === 'Actions') {
        return {
          ...column,
          width: 150,
          renderCell: (params: GridCellParams) => {
            return (
              <>
                <ItemRemoveButton itemId={String(params.id)} />
                <ItemEditButton itemId={String(params.id)} />
                <ItemViewButton itemId={String(params.id)} />
              </>
            );
          },
        };
      }
      return column;
    });
  };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{
          p: 2,
          minWidth: '100%',
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            width: 5,
            height: 5,
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
            backgroundColor: '#eeeeee',
            borderRadius: '5px',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
            backgroundColor: '#d3d3d3',
            borderRadius: '5px',
          },
          '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnSeparator--sideRight': {
            display: 'none',
          },
        }}
        rowHeight={35}
        rows={rows}
        columns={generateHeaderNames(itemsToRender[0])}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        disableSelectionOnClick
      />
    </Paper>
  );
};

export { ItemsTable };
