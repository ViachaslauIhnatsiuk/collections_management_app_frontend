import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ItemsTableRowProps } from '../../../models/itemsTableProps';
import { ItemRemoveButton } from '../ItemRemoveButton';
import { ItemEditButton } from '../ItemEditButton';
import { ItemViewButton } from '../ItemViewButton';

const ItemsTableRow: FC<ItemsTableRowProps> = ({ item }) => {
  const itemToRender = [item._id, item.title, item.tags];

  return (
    <TableRow hover tabIndex={-1}>
      {itemToRender.map((value, index) => {
        return (
          <TableCell key={index} sx={{ overflowWrap: 'break-word', px: 2, py: 0 }}>
            {typeof value === 'object'
              ? (value as string[]).map((tag: string, index: number) => (
                  <span key={index}>{tag}</span>
                ))
              : value}
          </TableCell>
        );
      })}
      <TableCell sx={{ px: 2, py: 0 }}>
        <ItemRemoveButton itemId={item._id as string} />
        <ItemEditButton itemId={item._id as string} />
        <ItemViewButton itemId={item._id as string} />
      </TableCell>
    </TableRow>
  );
};

export { ItemsTableRow };
