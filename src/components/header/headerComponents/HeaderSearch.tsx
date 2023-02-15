import { FC, useState } from 'react';
import { TextField, Stack, Autocomplete, Grid } from '@mui/material';
import { BASE_URL } from '../../../constants/baseUrl';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const HeaderSearch: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const [open, setOpen] = useState(false);

  const searchItems = async (newValue: string): Promise<void> => {
    if (newValue.length > 2) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items = await response.json();
      setItemsList(items);
      setOpen(true);
    } else {
      setItemsList([]);
      setOpen(false);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        open={open}
        onInputChange={(_, newValue) => {
          searchItems(newValue);
        }}
        clearOnBlur={false}
        noOptionsText="No results"
        options={itemsList}
        filterOptions={(options) => options}
        getOptionLabel={(option) => option.title || ''}
        renderOption={(props, option) => {
          return (
            <Grid container {...(props as IItem)}>
              <Grid item xs={6}>
                {option.title}
              </Grid>
            </Grid>
          );
        }}
        renderInput={(params) => {
          return <TextField {...params} size="small" placeholder="Search..." />;
        }}
      />
    </Stack>
  );
};

export { HeaderSearch };
