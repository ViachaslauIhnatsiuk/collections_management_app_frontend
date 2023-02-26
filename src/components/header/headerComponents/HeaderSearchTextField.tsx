import { FC } from 'react';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';
import { headerSearchInputStyles } from '../../../constants/componentsStyles';

const HeaderSearchTextField: FC<AutocompleteRenderInputParams> = (params) => {
  return (
    <TextField
      sx={headerSearchInputStyles}
      {...params}
      size="small"
      placeholder="Search..."
    />
  );
};

export { HeaderSearchTextField };
