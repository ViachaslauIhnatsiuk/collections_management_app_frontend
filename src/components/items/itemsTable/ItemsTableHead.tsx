import { FC } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { tableHeaderTitles } from '../../../constants/renderLists';

const ItemsTableHead: FC = () => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaderTitles.map((title) => (
          <TableCell
            key={title.id}
            align={title.align}
            sx={{
              px: 2,
              py: 1,
              fontWeight: 'bold',
              fontSize: '15px',
              bgcolor: '#eeeeee',
              minWidth: title.minWidth,
            }}
          >
            {title.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { ItemsTableHead };
