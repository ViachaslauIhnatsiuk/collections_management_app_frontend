import { FC, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BASE_URL } from '../../../constants/baseUrl';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const ItemFormTagsAutocomplete: FC = () => {
  const [tagsList, setTagsList] = useState<string[]>([]);
  const { register, setValue } = useFormContext();
  const { t } = useTranslation();

  const searchTags = async (newValue: string): Promise<void> => {
    if (newValue.length > 1) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items: IItem[] = await response.json();

      const tags = items.map((item) => item.tags).flat();
      const listOfUniqueTags = [...new Set(tags)];
      setTagsList(listOfUniqueTags);
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
        setValue('tags', newValue);
      }}
      freeSolo
      clearOnBlur={false}
      options={tagsList}
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
        <TextField
          {...params}
          size="small"
          placeholder={t('header.searchPlaceholder') as string}
        />
      )}
      {...register('tags')}
      onChange={(_, value) => {
        setValue('tags', value);
      }}
    />
  );
};

export { ItemFormTagsAutocomplete };
