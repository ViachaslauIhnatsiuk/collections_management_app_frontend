import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { CollectionCardImage } from './CollectionCardImage';
import { CollectionRemoveButton } from './CollectionRemoveButton';
import { CollectionEditButton } from './CollectionEditButton';
import { CollectionViewButton } from './CollectionViewButton';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import ReactMarkdown from 'react-markdown';
import { selectAuth, selectUsers, useAppSelector } from '../../../store/selectors';

const CollectionCard: FC<ICollection> = (props) => {
  const { _id, title, description, topic, imageUrl, ownerId } = props;
  const { currentUser } = useAppSelector(selectAuth);
  const { users } = useAppSelector(selectUsers);

  const collectionOwnerName = users.find((user) => user._id === ownerId)?.name;

  return (
    <Paper
      sx={{
        position: 'relative',
        padding: '20px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
      elevation={3}
    >
      <CollectionCardImage imageUrl={imageUrl as string} />
      <Paper
        elevation={4}
        sx={{ position: 'absolute', top: '-4px', left: '-4px', px: 0.5, fontSize: 12 }}
      >
        {collectionOwnerName}
      </Paper>
      <Stack sx={{ width: '100%', flexGrow: 1, px: 1 }}>
        <Typography sx={{ fontSize: 18 }}>{title}</Typography>
        <Typography sx={{ fontSize: 14 }}>{topic}</Typography>
        <Box sx={{ fontSize: 12, lineHeight: 1.2, mt: '-8px' }}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Box>
      </Stack>
      <Paper
        sx={{
          position: 'absolute',
          bottom: '-3px',
          right: '-3px',
          display: 'flex',
          flexDirection: 'column',
          visibility: currentUser._id === ownerId ? 'visible' : 'hidden',
        }}
      >
        <CollectionRemoveButton id={_id as string} />
        <CollectionEditButton id={_id as string} />
      </Paper>
      <CollectionViewButton id={_id as string} />
    </Paper>
  );
};

export { CollectionCard };
