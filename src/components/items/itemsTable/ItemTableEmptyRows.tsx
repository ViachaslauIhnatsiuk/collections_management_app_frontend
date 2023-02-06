import { FC, memo } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ItemsTableEmptyRowsProps } from '../../../models/itemsTableProps';

const ItemsTableEmptyRows: FC<ItemsTableEmptyRowsProps> = memo(({ emptyRows }) => {
  const rowHeight = 41;
  const emptyRowsHeight = rowHeight * emptyRows;

  return (
    <>
      {emptyRows > 0 && (
        <TableRow style={{ height: emptyRowsHeight }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  );
});

ItemsTableEmptyRows.displayName = 'ItemsTableEmptyRows';
export { ItemsTableEmptyRows };
