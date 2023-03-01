import { FC, useState } from 'react';
import { Autocomplete, Paper } from '@mui/material';
import { HeaderSearchOption } from './HeaderSearchOption';
import { HeaderSearchTextField } from './HeaderSearchTextField';
import { useDebounce } from '../../../hooks/useDebounce';
import { BASE_URL } from '../../../constants/baseUrl';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const HeaderSearch: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const debouncedFunction = useDebounce(searchItems, 700);

  async function searchItems(newValue: string): Promise<void> {
    if (newValue.length > 2) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items = await response.json();

      setItemsList(items);
    } else {
      setItemsList([]);
    }
  }

  return (
    <Paper elevation={4} sx={{ width: 300, backgroundColor: 'transparent' }}>
      <Autocomplete
        sx={{ width: '100%', '& .MuiSvgIcon-root': { color: '#ffffff' } }}
        onInputChange={(_, newValue) => {
          debouncedFunction(newValue);
        }}
        freeSolo
        clearOnBlur={false}
        options={itemsList}
        filterOptions={(option) => option}
        getOptionLabel={(option) => (option as IItem).title || ''}
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
