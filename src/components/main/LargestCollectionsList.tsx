import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { LargestCollectionCard } from './LargestCollectionCard';
import { NoContent } from '../UI/NoContent';
import { useItems } from '../../hooks/useItems';
import { largestCollectionsListStyles } from '../../constants/componentsStyles';
import { useTranslation } from 'react-i18next';

const LargestCollectionsList: FC = () => {
  const { getLargestCollections } = useItems();
  const { t } = useTranslation();

  const largestCollections = getLargestCollections();

  return (
    <Stack
      sx={{ flex: '1 1 60%', alignItems: 'center' }}
      data-testid="largest-collections"
    >
      <Typography sx={{ fontSize: 18, textAlign: 'center' }}>
        {t('notifications.largestCollections')}
      </Typography>
      <Stack sx={largestCollectionsListStyles}>
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
