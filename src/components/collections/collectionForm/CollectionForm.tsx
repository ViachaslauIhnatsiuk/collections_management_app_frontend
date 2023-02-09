import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { CollectionImage } from './CollectionImage';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionExtraFields } from './CollectionExtraFields';
import { CollectionFormButton } from './CollectionFormButton';
import {
  extraFieldsInitialState,
  initialFieldsValues,
} from '../../../constants/initialFieldsValues';
import { IExtraFieldValue, IUserForm } from '../../../models/componentsModels';
import { CollectionFormProps } from '../../../models/collectionFormProps';

const CollectionForm: FC<CollectionFormProps> = ({ id, value, setOpen }) => {
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
