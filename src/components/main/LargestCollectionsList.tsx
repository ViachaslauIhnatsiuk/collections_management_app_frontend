import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { LargestCollectionCard } from './LargestCollectionCard';
import { customScrollbarStyles } from '../../constants/componentsStyles';

const LargestCollectionsList: FC = () => {
  const { getLargestCollections } = useItems();

  const largetsCollections = getLargestCollections();

  return (
    <Stack>
      <Typography variant="h6">The largest collections</Typography>
      <Stack
        sx={{
          p: 1,
          width: '100%',
          flexDirection: 'row',
          overflowX: 'auto',
          gap: 3,
          ...customScrollbarStyles,
        }}
      >
        {largetsCollections.length
          ? largetsCollections.map((collection) => (
              <LargestCollectionCard key={collection._id} {...collection} />
            ))
          : 'There are no collections yet'}
      </Stack>
    </Stack>
  );
};

export { LargestCollectionsList };
