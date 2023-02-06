import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ItemsTableRowProps } from '../../../models/itemsTableProps';
import { ItemRemoveButton } from '../ItemRemoveButton';
import { ItemEditButton } from '../ItemEditButton';
import { ItemViewButton } from '../ItemViewButton';

const ItemsTableRow: FC<ItemsTableRowProps> = ({ item }) => {
  const itemToRender = Object.values(item).slice(0, 3);

  return (
    <TableRow hover tabIndex={-1}>
      {itemToRender.map((value, index) => {
        return (
          <TableCell key={index} sx={{ overflowWrap: 'break-word', px: 2, py: 0 }}>
            {typeof value === 'object'
              ? value.map((tag: string, index: number) => <span key={index}> {tag}</span>)
              : value}
          </TableCell>
        );
      })}
      <TableCell sx={{ px: 2, py: 0 }}>
        <ItemRemoveButton id={item._id as string} />
        <ItemEditButton id={item._id as string} />
        <ItemViewButton />
      </TableCell>
    </TableRow>
  );
};

export { ItemsTableRow };