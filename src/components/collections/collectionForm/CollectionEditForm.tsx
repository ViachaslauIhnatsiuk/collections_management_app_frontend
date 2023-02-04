import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { IUserForm } from '../../../models/userForm';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionEditFormButton } from './CollectionEditFormButton';
import { CollectionEditFormProps } from '../../../models/collectionForm';

const CollectionEditForm: FC<CollectionEditFormProps> = ({ id, setOpen }) => {
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
        <CollectionEditFormButton value="Edit collection" id={id} setOpen={setOpen} />
      </Box>
    </FormProvider>
  );
};

export { CollectionEditForm };
