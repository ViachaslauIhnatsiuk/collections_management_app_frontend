import { FC } from 'react';
import { Button } from '@mui/material';
import { SortButtonProps } from '../../models/componentsProps';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { useTranslation } from 'react-i18next';

const SortButton: FC<SortButtonProps> = ({ sortType, setSortType }) => {
  const { t } = useTranslation();

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
      startIcon={<SortByAlphaIcon />}
      onClick={handleSort}
    >
      {t('collections.sortButton')}
    </Button>
  );
};

export { SortButton };
