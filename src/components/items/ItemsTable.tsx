import { FC } from 'react';
import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import { IItem } from '../../store/slices/itemSlice/itemModel';
import { ItemsTableHead } from './ItemsTableHead';
import { ItemsTableRow } from './ItemsTableRow';

const ItemsTable: FC<{ itemsToRender: IItem[] }> = ({ itemsToRender }) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: '50vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <ItemsTableHead />
          <TableBody>
            {itemsToRender.map((item) => {
              return <ItemsTableRow key={item._id} item={item} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export { ItemsTable };
