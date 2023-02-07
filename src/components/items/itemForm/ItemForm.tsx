import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { ItemFormFields } from './ItemFromFields';
import { ItemFormButton } from './ItemFormButton';
import { ItemFormProps } from '../../../models/itemFormProps';
import { IUserForm } from '../../../models/componentsModels';
import { selectCollections, useAppSelector } from '../../../store/selectors';
import { IExtraField } from '../../../models/itemExtraFieldsProps';

const ItemForm: FC<ItemFormProps> = (props) => {
  const { value, itemId, collectionId, setOpen } = props;
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { collections } = useAppSelector(selectCollections);

  const extraFields = useMemo(() => {
    const collection = collections.find(({ _id }) => _id === collectionId);
    return collection?.itemExtraFields;
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
        <ItemFormFields extraFields={extraFields as IExtraField[]} />
        <ItemFormButton
          value={value}
          itemId={itemId}
          collectionId={collectionId}
          extraFields={extraFields as IExtraField[]}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { ItemForm };
