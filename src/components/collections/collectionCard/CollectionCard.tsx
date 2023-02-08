import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { CollectionCardImage } from './CollectionCardImage';
import { CollectionRemoveButton } from './CollectionRemoveButton';
import { CollectionEditButton } from './CollectionEditButton';
import { CollectionViewButton } from './CollectionViewButton';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import ReactMarkdown from 'react-markdown';

const CollectionCard: FC<ICollection> = (props) => {
  const { title, description, topic, imageUrl, _id } = props;
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
      <CollectionCardImage imageUrl={imageUrl as string} />
      <Stack>
        <Typography variant="h4" sx={{ color: '#2475c5', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: '#2475c5', textAlign: 'center' }}>
          {topic}
        </Typography>
        <Box sx={{ color: '#2475c5', textAlign: 'center' }}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Box>
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
        <CollectionRemoveButton id={_id as string} />
        <CollectionEditButton id={_id as string} />
      </Stack>
      <CollectionViewButton id={_id as string} />
    </Paper>
  );
};

export { CollectionCard };
