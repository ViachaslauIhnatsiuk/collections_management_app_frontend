import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { ItemFormFields } from './ItemFromFields';
import { ItemFormButton } from './ItemFormButton';
import { ItemFormProps } from '../../../models/itemFormProps';
import { IUserForm } from '../../../models/componentsModels';
import { selectCollections, useAppSelector } from '../../../store/selectors';

const ItemForm: FC<ItemFormProps> = (props) => {
  const { value, itemId, collectionId, setOpen } = props;
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { collections } = useAppSelector(selectCollections);

  const extraFields = useMemo(() => {
    const collection = collections.find(({ _id }) => _id === collectionId);
    const fieldNames = collection?.itemExtraFields.map((field) => field.name) as string[];
    return fieldNames;
  }, [collections, collectionId]);

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
        <ItemFormButton
          value={value}
          itemId={itemId}
          collectionId={collectionId}
          extraFields={extraFields}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { ItemForm };