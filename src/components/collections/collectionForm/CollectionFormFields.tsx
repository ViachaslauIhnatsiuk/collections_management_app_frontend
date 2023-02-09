import { FC } from 'react';
import { Box } from '@mui/material';
import { CollectionFormField } from './CollectionFormField';
import { CollectionTopicSelect } from './CollectionTopicSelect';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';

const CollectionFormFields: FC<{ collection: ICollection }> = ({ collection }) => {
  return (
    <>
      <Box sx={{ width: '100%', gap: 1, display: 'flex' }}>
        <CollectionTopicSelect type="topic" value={collection?.topic || ''} />
        <CollectionFormField
          type="title"
          minLength={1}
          maxLength={25}
          value={collection?.title || ''}
        />
      </Box>
      <CollectionFormField
        type="description"
        minLength={1}
        maxLength={100}
        multi={true}
        rows={3}
        value={collection?.description || ''}
      />
    </>
  );
};

export { CollectionFormFields };
