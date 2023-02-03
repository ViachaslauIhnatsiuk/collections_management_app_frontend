import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IUserForm } from '../../../models/userForm';
import { CollectionFormField } from './CollectionFormField';
import { ExtraFieldsList } from './ExtraFieldsList';

const CollectionForm: FC = () => {
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
            rowGap: 1,
          }}
        >
          <CollectionFormField type="title" />
          <CollectionFormField type="topic" />
          <CollectionFormField type="description" />
        </Box>
      </FormProvider>
      <ExtraFieldsList />
    </>
  );
};

export { CollectionForm };
