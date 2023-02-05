import { MouseEvent } from 'react';
import { Box, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { ItemsTablePaginationActionsProps } from '../../../models/itemsTableProps';

const ItemsTablePaginationActions = (props: ItemsTablePaginationActionsProps) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const setFirstPage = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const setPreviousPage = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const setNextPage = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const setLastPage = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2 }}>
      <IconButton onClick={setFirstPage} disabled={page === 0}>
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={setPreviousPage} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={setNextPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={setLastPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

export { ItemsTablePaginationActions };
