import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { CollectionImage } from './CollectionImage';
import { CollectionFormFields } from './CollectionFormFields';
import { CollectionEditFormButton } from './CollectionEditFormButton';
import { CollectionEditFormProps } from '../../../models/collectionFormProps';
import { selectCollections, useAppSelector } from '../../../store/selectors';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { IUserForm } from '../../../models/componentsModels';

const CollectionEditForm: FC<CollectionEditFormProps> = ({ id, setOpen }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const methods = useForm<IUserForm>({ mode: 'onBlur' });
  const { handleSubmit, reset } = methods;
  const { collections } = useAppSelector(selectCollections);

  const collectionFieldsValues = collections.find(
    (collection) => collection._id === id,
  ) as ICollection;

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
        <CollectionImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <CollectionFormFields fieldsValues={collectionFieldsValues} />
        <CollectionEditFormButton id={id} imageUrl={imageUrl} setOpen={setOpen} />
      </Box>
    </FormProvider>
  );
};

export { CollectionEditForm };
