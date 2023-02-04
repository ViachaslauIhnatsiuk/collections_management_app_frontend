import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IUserForm } from '../../../models/userForm';
import { CollectionFormField } from './CollectionFormField';
import { CollectionFormButton } from './CollectionFormButton';
import { ExtraFieldsList } from '../extraFieldsForm/ExtraFieldsList';
import { IExtraFields } from '../../../models/itemExtraFieldsProps';
import { CollectionFormProps } from '../../../models/collectionForm';

const CollectionForm: FC<CollectionFormProps> = ({ setOpen }) => {
  const [extraFields, setExtraFields] = useState<IExtraFields[]>([]);
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;

  return (
    <>
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
          <CollectionFormField type="title" minLength={1} maxLength={25} />
          <CollectionFormField type="topic" minLength={1} maxLength={25} />
          <CollectionFormField
            type="description"
            minLength={1}
            maxLength={100}
            multi={true}
            rows={3}
          />
          <ExtraFieldsList extraFields={extraFields} setExtraFields={setExtraFields} />
          <CollectionFormButton
            value="Create collection"
            extraFields={extraFields}
            setExtraFields={setExtraFields}
            setOpen={setOpen}
          />
        </Box>
      </FormProvider>
    </>
  );
};

export { CollectionForm };
