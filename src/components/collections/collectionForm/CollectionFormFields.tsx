import { FC } from 'react';
import { Box } from '@mui/material';
import { CollectionFormField } from './CollectionFormField';
import { CollectionTopicSelect } from './CollectionTopicSelect';
import { CollectionFormFieldsProps } from '../../../models/collectionFormProps';

const CollectionFormFields: FC<CollectionFormFieldsProps> = ({ fieldsValues }) => {
  return (
    <>
      <Box sx={{ width: '100%', gap: 1, display: 'flex' }}>
        <CollectionTopicSelect type="topic" value="" />
        <CollectionFormField
          type="title"
          minLength={1}
          maxLength={25}
          value={fieldsValues.title}
        />
      </Box>
      <CollectionFormField
        type="description"
        minLength={1}
        maxLength={100}
        multi={true}
        rows={3}
        value={fieldsValues.description}
      />
    </>
  );
};

export { CollectionFormFields };
