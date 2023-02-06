import { FC, memo } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ItemsTableEmptyRowsProps } from '../../../models/itemsTableProps';

const ItemsTableEmptyRows: FC<ItemsTableEmptyRowsProps> = memo(({ emptyRows }) => {
  const rowHeight = 41 * emptyRows;

  return (
    <>
      {emptyRows > 0 && (
        <TableRow style={{ height: rowHeight }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  );
});

ItemsTableEmptyRows.displayName = 'ItemsTableEmptyRows';
export { ItemsTableEmptyRows };
