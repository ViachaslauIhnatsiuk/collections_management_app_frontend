import { FC, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { BASE_URL } from '../../../constants/commonConstants';

const ItemFormTagsAutocomplete: FC = () => {
  const [tagsList, setTagsList] = useState<string[]>([]);
  const { register, setValue } = useFormContext();
  const debouncedFunction = useDebounce(searchTags, 700);
  const { t } = useTranslation();

  async function searchTags(newValue: string): Promise<void> {
    if (newValue.length > 1) {
      const response = await fetch(`${BASE_URL}/items?search=${newValue}`);
      const items: IItem[] = await response.json();

      const tags = items.map((item) => item.tags).flat();
      const listOfUniqueTags = [...new Set(tags)];
      setTagsList(listOfUniqueTags);
    } else {
      setTagsList([]);
    }
  }

  return (
    <Autocomplete
      onInputChange={(_, newValue) => {
        debouncedFunction(newValue);
        setValue('tags', newValue);
      }}
      freeSolo
      multiple
      fullWidth
      size="small"
      limitTags={2}
      clearOnBlur={false}
      options={tagsList}
      getOptionLabel={(option) => option || ''}
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
