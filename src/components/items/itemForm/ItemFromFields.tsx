import { FC, useMemo } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useItems } from '../../../hooks/useItems';
import { ItemFormField } from './ItemFormField';
import { ItemFieldFieldsProps } from '../../../models/itemFormProps';
import { ItemFormTagsAutocomplete } from './ItemFormTagsAutocomplete';
import {
  itemCheckboxStyles,
  itemFormFieldsStyles,
} from '../../../constants/componentsStyles';

const ItemFormFields: FC<ItemFieldFieldsProps> = ({ itemId, extraFields }) => {
  const { register } = useFormContext();
  const { getItemById } = useItems();

  const currentItem = getItemById(itemId);

  const types = useMemo(() => {
    return extraFields.map((field) => field.type.toLowerCase());
  }, [extraFields]);

  const names = useMemo(() => {
    return extraFields.map((field) => field.name.toLowerCase());
  }, [extraFields]);

  return (
    <Box sx={itemFormFieldsStyles}>
      <ItemFormField
        type="title"
        label="title"
        minLength={1}
        maxLength={25}
        value={currentItem?.title || ''}
      />
      <ItemFormTagsAutocomplete />
      {types.map((type, index) => {
        return type === 'checkbox' ? (
          <FormControlLabel
            key={index}
            sx={itemCheckboxStyles}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }} />}
            labelPlacement="start"
            label={names[index]}
            {...register(names[index])}
          />
        ) : (
          <ItemFormField
            key={index}
            value={(currentItem?.[names[index]] as string) || ''}
            type={type}
            label={names[index]}
            minLength={1}
            maxLength={type === 'textfield' ? 100 : 25}
            multi={type === 'textfield'}
            rows={type === 'textfield' ? 3 : 0}
          />
        );
      })}
    </Box>
  );
};

export { ItemFormFields };
