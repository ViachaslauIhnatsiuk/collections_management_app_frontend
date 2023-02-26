import { FC, useState } from 'react';
import { Autocomplete, Paper } from '@mui/material';
import { HeaderSearchOption } from './HeaderSearchOption';
import { HeaderSearchTextField } from './HeaderSearchTextField';
import { BASE_URL } from '../../../constants/baseUrl';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const HeaderSearch: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);

  const searchItems = async (newValue: string): Promise<void> => {
    if (newValue.length > 2) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items = await response.json();
      setItemsList(items);
    } else {
      setItemsList([]);
    }
  };

  return (
    <Paper elevation={4} sx={{ width: 300, backgroundColor: 'transparent' }}>
      <Autocomplete
        sx={{ width: '100%', '& .MuiSvgIcon-root': { color: '#ffffff' } }}
        onInputChange={(_, newValue) => {
          searchItems(newValue);
        }}
        freeSolo
        clearOnBlur={false}
        options={itemsList}
        getOptionLabel={(option) => (option as IItem).title || ''}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        renderOption={(props, option) => {
          return <HeaderSearchOption key={option._id} props={props} option={option} />;
        }}
        renderInput={(params) => {
          return <HeaderSearchTextField {...params} />;
        }}
      />
    </Paper>
  );
};

export { HeaderSearch };
