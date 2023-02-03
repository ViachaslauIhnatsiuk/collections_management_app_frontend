import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IFormUser } from '../../models/formUser';
import { MainCollectionFormField } from './collectionFormComponents/MainCollectionFormField';
import { ExtraFieldsList } from './collectionFormComponents/ExtraFieldsList';

const AddCollectionForm: FC = () => {
  const methods = useForm<IFormUser>({ mode: 'onBlur' });
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
          <MainCollectionFormField type="title" />
          <MainCollectionFormField type="topic" />
          <MainCollectionFormField type="description" />
        </Box>
      </FormProvider>
      <ExtraFieldsList />
    </>
  );
};

export { AddCollectionForm };
