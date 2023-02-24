import { FC, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BASE_URL } from '../../../constants/baseUrl';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { v4 as uuidv4 } from 'uuid';

const ItemFormTagsAutocomplete: FC = () => {
  const [tagsList, setTagsList] = useState<string[]>([]);
  const { register, setValue } = useFormContext();

  const searchTags = async (newValue: string): Promise<void> => {
    if (newValue.length > 2) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items: IItem[] = await response.json();
      const tags = items
        .map((item) => item.tags)
        .reduce((acc, curr) => [...acc, ...curr], []);
      setTagsList(tags);
    } else {
      setTagsList([]);
    }
  };

  return (
    <Autocomplete
      multiple
      fullWidth
      onInputChange={(_, newValue) => {
        searchTags(newValue);
      }}
      clearOnBlur={false}
      noOptionsText="No results"
      options={tagsList}
      filterOptions={(options) => options}
      getOptionLabel={(option) => option || ''}
      isOptionEqualToValue={(option, value) => option === value}
      renderOption={(props, option) => {
        return (
          <li {...props} key={uuidv4()}>
            {option}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" placeholder="Search..." />
      )}
      {...register('tags')}
      onChange={(_, value) => {
        setValue('tags', value);
      }}
    />
  );
};

export { ItemFormTagsAutocomplete };
