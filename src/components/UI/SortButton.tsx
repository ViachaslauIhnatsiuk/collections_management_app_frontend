import { FC } from 'react';
import { Button } from '@mui/material';
import { SortButtonProps } from '../../models/componentsProps';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const SortButton: FC<SortButtonProps> = ({ sortType, setSortType }) => {
  const handleSort = () => {
    if (sortType === 'asc') {
      setSortType('desc');
    } else {
      setSortType('asc');
    }
  };

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ width: 100 }}
      startIcon={sortType === 'asc' ? <NorthIcon /> : <SouthIcon />}
      onClick={handleSort}
    >
      {sortType === 'asc' ? 'A-Z' : 'Z-A'}
    </Button>
  );
};

export { SortButton };
