import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';

const CollectionCard: FC<ICollection> = (collection) => {
  return (
    <Paper
      sx={{
        p: 4,
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
    </Paper>
  );
};

export { CollectionCard };
