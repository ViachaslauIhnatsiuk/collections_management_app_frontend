import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ItemsTableRowProps } from '../../models/itemsTableProps';

const ItemsTableRow: FC<ItemsTableRowProps> = ({ item }) => {
  const itemsToRender = Object.values(item).slice(0, 3);

  return (
    <TableRow hover tabIndex={-1}>
      {itemsToRender.map((value, index) => {
        return (
          <TableCell key={index} sx={{ overflowWrap: 'break-word', px: 2, py: 1 }}>
            {typeof value === 'object'
              ? value.map((tag: string, index: number) => <span key={index}> {tag}</span>)
              : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export { ItemsTableRow };
