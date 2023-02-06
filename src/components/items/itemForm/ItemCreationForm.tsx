import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { ItemFormFields } from './ItemFromFields';
import { ItemCreationFormButton } from './ItemCreationFormButton';
import { ItemFormProps } from '../../../models/itemFormProps';
import { IUserForm } from '../../../models/componentsModels';
import { selectCollections, useAppSelector } from '../../../store/selectors';

const ItemCreationForm: FC<ItemFormProps> = ({ setOpen, id }) => {
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { collections } = useAppSelector(selectCollections);

  const extraFields = useMemo(() => {
    const collection = collections.find((collection) => collection._id === id);
    const fieldNames = collection?.itemExtraFields.map((field) => field.name) as string[];
    return fieldNames;
  }, [collections]);

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(() => reset())}
        sx={{
          width: '100%',
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: 2,
        }}
      >
        <ItemFormFields extraFields={extraFields} />
        <ItemCreationFormButton
          value="Create item"
          extraFields={extraFields}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { ItemCreationForm };
