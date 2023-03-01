import { FC } from 'react';
import { Box } from '@mui/material';
import { CollectionUserSelect } from './CollectionUserSelect';
import { CollectionTopicSelect } from './CollectionTopicSelect';
import { CollectionFormField } from './CollectionFormField';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useTranslation } from 'react-i18next';

const CollectionFormFields: FC<{ collection: ICollection }> = ({ collection }) => {
  const { currentUser } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  return (
    <>
      {currentUser.isAdmin && (
        <CollectionUserSelect
          type="user"
          label={t('collectionForm.userSelect')}
          value={collection?.ownerId || ''}
        />
      )}
      <Box sx={{ width: '100%', gap: 1, display: 'flex' }}>
        <CollectionTopicSelect
          type="topic"
          label={t('collectionForm.topicSelect')}
          value={collection?.topic || ''}
        />
        <CollectionFormField
          label={t('collectionForm.title')}
          type="title"
          minLength={1}
          maxLength={25}
          value={collection?.title || ''}
        />
      </Box>
      <CollectionFormField
        label={t('collectionForm.description')}
        type="description"
        minLength={1}
        maxLength={100}
        multi={true}
        rows={2}
        value={collection?.description || ''}
      />
    </>
  );
};

export { CollectionFormFields };
