import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { customScrollbarStyles } from '../../constants/componentsStyles';

const LargestCollectionsList: FC = () => {
  const { getLargestCollections } = useItems();

  const largetsCollections = getLargestCollections();

  return (
    <>
      <Typography variant="h6">The largest collections</Typography>
      <Stack
        sx={{
          width: '100%',
          flexDirection: 'row',
          gap: 2,
          ...customScrollbarStyles,
        }}
      >
        {largetsCollections.length
          ? largetsCollections.map((collection) => (
              <CollectionCard key={collection._id} {...collection} />
            ))
          : 'There are no collections yet'}
      </Stack>
    </>
  );
};

export { LargestCollectionsList };
