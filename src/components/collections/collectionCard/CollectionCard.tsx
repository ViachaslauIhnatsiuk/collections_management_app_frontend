import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { RemoveCollectionButton } from './RemoveCollectionButton';
import { EditCollectionButton } from './EditCollectionButton';

const CollectionCard: FC<ICollection> = (collection) => {
  return (
    <Paper
      sx={{
        p: 3,
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4" sx={{ color: '#2475c5', textAlign: 'center' }}>
        {collection.title}
      </Typography>
      <Typography variant="h5" sx={{ color: '#2475c5', textAlign: 'center' }}>
        {collection.topic}
      </Typography>
      <Typography variant="h6" sx={{ color: '#2475c5', textAlign: 'center' }}>
        {collection.description}
      </Typography>
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <RemoveCollectionButton id={collection._id as string} />
        <EditCollectionButton />
      </Stack>
    </Paper>
  );
};

export { CollectionCard };
