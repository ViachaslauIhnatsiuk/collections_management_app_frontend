import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useCollections } from '../../../hooks/useCollections';
import { CollectionImage } from './CollectionImage';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionExtraFields } from './collectionExtraFields/CollectionExtraFields';
import { CollectionExtraFieldsForm } from './collectionExtraFields/CollectionExtraFieldsForm';
import { CollectionFormButton } from './CollectionFormButton';
import { IExtraField, IUserForm } from '../../../models/componentsModels';
import { CollectionFormProps } from '../../../models/collectionFormProps';

const CollectionForm: FC<CollectionFormProps> = ({ id, value, setOpen }) => {
  const { getCollectionById } = useCollections();
  const collection = getCollectionById(id as string);
  const [imageUrl, setImageUrl] = useState<string>(collection?.imageUrl || '');
  const [extraFields, setExtraFields] = useState<IExtraField[]>([]);
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
        <CollectionFormFields collection={collection} />
        <CollectionExtraFields
          extraFields={extraFields}
          setExtraFields={setExtraFields}
        />
        {value === 'Create collection' && (
          <CollectionExtraFieldsForm
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