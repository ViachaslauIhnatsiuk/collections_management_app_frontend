import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemsTableRow: FC<{ item: IItem }> = ({ item }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {Object.values(item)
        .slice(0, 3)
        .map((value, index) => {
          return (
            <TableCell key={index} sx={{ px: 2, py: 0.4 }}>
              {value.toString()}
            </TableCell>
          );
        })}
    </TableRow>
  );
};

export { ItemsTableRow };
