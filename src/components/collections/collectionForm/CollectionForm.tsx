import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useCollections } from '../../../hooks/useCollections';
import { CollectionImage } from './CollectionImage';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionExtraFields } from './CollectionExtraFields';
import { CollectionFormButton } from './CollectionFormButton';
import { extraFieldsInitialState } from '../../../constants/initialFieldsValues';
import { IExtraFieldValue, IUserForm } from '../../../models/componentsModels';
import { CollectionFormProps } from '../../../models/collectionFormProps';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';

const CollectionForm: FC<CollectionFormProps> = ({ id, value, setOpen }) => {
  const { getCollectionById } = useCollections();
  const collection = getCollectionById(id as string);
  const [imageUrl, setImageUrl] = useState<string>(collection?.imageUrl || '');
  const [extraFields, setExtraFields] = useState<IExtraFieldValue[]>(
    extraFieldsInitialState,
  );
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;

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
          gap: 1,
        }}
      >
        <CollectionImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <CollectionFormFields collection={collection as ICollection} />
        {value === 'Create collection' && (
          <CollectionExtraFields
            extraFields={extraFields}
            setExtraFields={setExtraFields}
          />
        )}
        <CollectionFormButton
          id={id}
          value={value}
          imageUrl={imageUrl}
          extraFields={extraFields}
          setExtraFields={setExtraFields}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { CollectionForm };
