import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { RemoveCollectionButton } from './RemoveCollectionButton';
import { EditCollectionButton } from './EditCollectionButton';
import { ViewCollectionButton } from './ViewCollectionButton';

const CollectionCard: FC<ICollection> = ({ title, topic, description, _id }) => {
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
      <Stack sx={{ height: '100%' }}>
        <Typography variant="h4" sx={{ color: '#2475c5', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: '#2475c5', textAlign: 'center' }}>
          {topic}
        </Typography>
        <Typography variant="h6" sx={{ color: '#2475c5', textAlign: 'center' }}>
          {description}
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <RemoveCollectionButton id={_id as string} />
        <EditCollectionButton />
      </Stack>
      <ViewCollectionButton id={_id as string} />
    </Paper>
  );
};

export { CollectionCard };