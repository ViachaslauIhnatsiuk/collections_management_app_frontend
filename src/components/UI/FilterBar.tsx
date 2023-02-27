import { FC } from 'react';
import { TextField } from '@mui/material';
import { FilterBarProps } from '../../models/componentsProps';
import { useTranslation } from 'react-i18next';

const FilterBar: FC<FilterBarProps> = ({ setFiltered }) => {
  const { t } = useTranslation();

  return (
    <TextField
      inputProps={{
        style: {
          padding: '4px 10px',
        },
      }}
      autoComplete="off"
      size="small"
      placeholder={t('collections.filterBar') as string}
      onChange={(e) => setFiltered(e.target.value)}
    />
  );
};

export { FilterBar };
