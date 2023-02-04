import { FC, useMemo, useState } from 'react';
import { Table, TableContainer, Paper } from '@mui/material';
import { ItemsTableHead } from './ItemsTableHead';
import { ItemsTableFooter } from './ItemsTableFooter';
import { ItemsTableProps } from '../../models/itemsTableProps';
import { ItemsTableBody } from './ItemsTableBody';

const ItemsTable: FC<ItemsTableProps> = ({ itemsToRender }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const emptyRows = useMemo(() => {
    return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - itemsToRender.length) : 0;
  }, [page, rowsPerPage, itemsToRender]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '800px' }}>
        <ItemsTableHead />
        <ItemsTableBody
          itemsToRender={itemsToRender}
          page={page}
          rowsPerPage={rowsPerPage}
          emptyRows={emptyRows}
        />
        <ItemsTableFooter
          itemsToRender={itemsToRender}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
};

export { ItemsTable };
