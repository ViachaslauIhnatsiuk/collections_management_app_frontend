import { FC } from 'react';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { headerSearchInputStyles } from '../../../constants/componentsStyles';
import { useTranslation } from 'react-i18next';

const HeaderSearchTextField: FC<AutocompleteRenderInputParams> = (params) => {
  const { t } = useTranslation();

  return (
    <TextField
      sx={headerSearchInputStyles}
      {...params}
      size="small"
      placeholder={t('header.searchPlaceholder') as string}
    />
  );
};

export { HeaderSearchTextField };
