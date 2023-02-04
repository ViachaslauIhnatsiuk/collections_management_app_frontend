import { FC } from 'react';
import { TableBody } from '@mui/material';
import { ItemsTableRow } from './ItemsTableRow';
import { ItemsTableEmptyRows } from './ItemTableEmptyRows';
import { ItemsTableBodyProps } from '../../models/itemsTableProps';

const ItemsTableBody: FC<ItemsTableBodyProps> = (props) => {
  const { itemsToRender, page, rowsPerPage, emptyRows } = props;

  return (
    <TableBody>
      {(rowsPerPage > 0
        ? itemsToRender.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : itemsToRender
      ).map((item) => {
        return <ItemsTableRow key={item._id} item={item} />;
      })}
      <ItemsTableEmptyRows emptyRows={emptyRows} />
    </TableBody>
  );
};

export { ItemsTableBody };
