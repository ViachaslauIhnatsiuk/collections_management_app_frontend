import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { LargestCollectionCard } from './LargestCollectionCard';
import { NoContent } from '../UI/NoContent';
import { useItems } from '../../hooks/useItems';
import { useTranslation } from 'react-i18next';

const LargestCollectionsList: FC = () => {
  const { getLargestCollections } = useItems();
  const { t } = useTranslation();

  const largestCollections = getLargestCollections();

  return (
    <Stack sx={{ flex: '1 1 60%', alignItems: 'center' }}>
      <Typography sx={{ fontSize: 18, textAlign: 'center' }}>
        {t('notifications.largestCollections')}
      </Typography>
      <Stack
        sx={{
          maxHeight: 330,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
          gap: 2,
          p: 0.5,
          overflowX: 'auto',
        }}
      >
        {largestCollections.length ? (
          largestCollections.map((collection) => (
            <LargestCollectionCard key={collection?._id} {...collection} />
          ))
        ) : (
          <NoContent text={t('notifications.largestCollectionsNoContent')} size={16} />
        )}
      </Stack>
    </Stack>
  );
};

export { LargestCollectionsList };
