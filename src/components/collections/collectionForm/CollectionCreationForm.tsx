import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { CollectionImage } from './CollectionImage';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionExtraFields } from './CollectionExtraFields';
import { CollectionCreationFormButton } from './CollectionCreationFormButton';
import {
  extraFieldsInitialState,
  initialFieldsValues,
} from '../../../constants/initialFieldsValues';
import { IExtraFieldValue, IUserForm } from '../../../models/componentsModels';
import { CollectionFormProps } from '../../../models/collectionFormProps';

const CollectionCreationForm: FC<CollectionFormProps> = ({ setOpen }) => {
  const [extraFields, setExtraFields] = useState<IExtraFieldValue[]>(
    extraFieldsInitialState,
  );
  const [imageUrl, setImageUrl] = useState<string>('');
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
        <CollectionFormFields fieldsValues={initialFieldsValues} />
        <CollectionExtraFields
          extraFields={extraFields}
          setExtraFields={setExtraFields}
        />
        <CollectionCreationFormButton
          imageUrl={imageUrl}
          extraFields={extraFields}
          setExtraFields={setExtraFields}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { CollectionCreationForm };
