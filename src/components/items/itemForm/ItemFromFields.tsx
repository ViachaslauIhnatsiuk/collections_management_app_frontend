import { Checkbox, FormControlLabel } from '@mui/material';
import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ItemFormField } from './ItemFormField';
import { ItemFieldFieldsProps } from '../../../models/itemFormProps';
import { selectItems, useAppSelector } from '../../../store/selectors';

const ItemFormFields: FC<ItemFieldFieldsProps> = ({ itemId, extraFields }) => {
  const { register } = useFormContext();
  const { items } = useAppSelector(selectItems);

  const currentItem = useMemo(() => items.find(({ _id }) => _id === itemId), [items]);

  const types = useMemo(() => {
    return extraFields.map((field) => field.type.toLowerCase()) as string[];
  }, [extraFields]);

  const names = useMemo(() => {
    return extraFields.map((field) => field.name.toLowerCase()) as string[];
  }, [extraFields]);

  return (
    <>
      <ItemFormField
        type="title"
        label="Title"
        minLength={1}
        maxLength={25}
        value={(currentItem?.title as string) || ''}
      />
      <ItemFormField
        type="tags"
        label="Tags"
        minLength={1}
        maxLength={25}
        value={(currentItem?.tags as string) || ''}
      />
      {types.map((type, index) => {
        return type === 'checkbox' ? (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
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
    </>
  );
};

export { ItemFormFields };
