import { FC, MouseEvent, ChangeEvent } from 'react';
import { TableFooter, TablePagination, TableRow } from '@mui/material';
import { ItemsTablePaginationActions } from './ItemsTablePaginationActions';
import { ItemsTableFooterProps } from '../../../models/itemsTableProps';
import { rowsPerPageOptions } from '../../../constants/rowsPerPageOptions';

const ItemsTableFooter: FC<ItemsTableFooterProps> = (props) => {
  const { itemsToRender, page, rowsPerPage, setPage, setRowsPerPage } = props;

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    const base = 10;

    setRowsPerPage(parseInt(value, base));
    setPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          colSpan={3}
          count={itemsToRender.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={ItemsTablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};

export { ItemsTableFooter };
