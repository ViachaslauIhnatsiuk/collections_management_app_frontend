import { Checkbox, FormControlLabel } from '@mui/material';
import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IExtraField } from '../../../models/componentsModels';
import { ItemFormField } from './ItemFormField';

const ItemFormFields: FC<{ extraFields: IExtraField[] }> = ({ extraFields }) => {
  const { register } = useFormContext();
  const types = useMemo(() => {
    return extraFields.map((field) => field.type.toLowerCase()) as string[];
  }, [extraFields]);

  return (
    <>
      <ItemFormField type="title" label="Title" minLength={1} maxLength={25} value="" />
      <ItemFormField type="tags" label="Tags" minLength={1} maxLength={25} value="" />
      {types.map((type, index) => {
        return type === 'checkbox' ? (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            labelPlacement="start"
            label={extraFields[index].name}
            {...register(type)}
          />
        ) : (
          <ItemFormField
            key={index}
            value=""
            type={type}
            label={extraFields[index].name}
            minLength={1}
            maxLength={25}
            multi={type === 'textfield'}
            rows={type === 'textfield' ? 3 : 0}
          />
        );
      })}
    </>
  );
};

export { ItemFormFields };
