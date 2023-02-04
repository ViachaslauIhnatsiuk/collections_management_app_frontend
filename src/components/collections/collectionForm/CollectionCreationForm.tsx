import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IUserForm } from '../../../models/userForm';
import { CollectionFormFields } from './CollectionFormFields';
import { ExtraFieldsList } from '../extraFieldsForm/ExtraFieldsList';
import { CollectionCreationFormButton } from './CollectionCreationFormButton';
import { IExtraFields } from '../../../models/itemExtraFieldsProps';
import { CollectionFormProps } from '../../../models/collectionForm';

const CollectionCreationForm: FC<CollectionFormProps> = ({ setOpen }) => {
  const [extraFields, setExtraFields] = useState<IExtraFields[]>([]);
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
          rowGap: 2,
        }}
      >
        <CollectionFormFields />
        <ExtraFieldsList extraFields={extraFields} setExtraFields={setExtraFields} />
        <CollectionCreationFormButton
          value="Create collection"
          extraFields={extraFields}
          setExtraFields={setExtraFields}
          setOpen={setOpen}
        />
      </Box>
    </FormProvider>
  );
};

export { CollectionCreationForm };
