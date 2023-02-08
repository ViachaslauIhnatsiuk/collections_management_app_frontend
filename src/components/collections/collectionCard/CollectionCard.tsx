import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { CollectionRemoveButton } from './CollectionRemoveButton';
import { CollectionEditButton } from './CollectionEditButton';
import { CollectionViewButton } from './CollectionViewButton';
import defaultImage from '../../../assets/default.jpg';
import ReactMarkdown from 'react-markdown';

const boxStyles = {
  width: '100%',
  height: '200px',
  borderRadius: '5px',
  overflow: 'hidden',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

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
      {imageUrl ? (
        <Box sx={boxStyles}>
          <Box component="img" src={imageUrl} alt="image" />
        </Box>
      ) : (
        <Box sx={boxStyles}>
          <Box component="img" src={defaultImage} alt="image" />
        </Box>
      )}
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
