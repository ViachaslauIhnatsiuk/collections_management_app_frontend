import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useCollections } from '../../../hooks/useCollections';
import { ItemFormFields } from './ItemFromFields';
import { ItemFormButton } from './ItemFormButton';
import { ItemFormProps } from '../../../models/itemFormProps';
import { IUserForm } from '../../../models/componentsModels';

const ItemForm: FC<ItemFormProps> = (props) => {
  const { value, itemId, collectionId, setOpen } = props;
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { getCollectionById } = useCollections();

  const extraFields = useMemo(() => {
    const collection = getCollectionById(collectionId);
    return collection?.itemExtraFields;
  }, [collectionId]);

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
        <ItemFormFields itemId={itemId as string} extraFields={extraFields} />
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
