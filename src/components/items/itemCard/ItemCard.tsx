import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { ItemCommentsList } from './ItemCommentsList';
import ReactMarkdown from 'react-markdown';

const ItemCard: FC<{ item: IItem }> = ({ item }) => {
  const {
    title,
    description,
    _id,
    createdAt,
    updatedAt,
    collectionId,
    ownerId,
    tags,
    comments,
    likes,
    ...itemToRender
  } = item;
  const itemKeys = Object.keys(itemToRender).map(
    (key) => key.charAt(0).toUpperCase() + key.slice(1),
  );
  const itemValues = Object.values(itemToRender);

  return (
    <Paper
      sx={{
        mt: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box sx={{ color: '#2475c5', textAlign: 'center' }}>
        <ReactMarkdown>{description as string}</ReactMarkdown>
      </Box>
      <Stack sx={{ width: '100%' }}>
        {itemValues.map((value, index) => {
          return (
            <Typography key={index} sx={{ fontSize: 16 }}>
              {itemKeys[index]}: {value.toString()}
            </Typography>
          );
        })}
      </Stack>
      <Stack
        sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontSize: 16 }}>Tags: {tags}</Typography>
        <Typography sx={{ fontSize: 16 }}>Likes: {likes}</Typography>
      </Stack>
      <ItemCommentsList item={item} />
    </Paper>
  );
};

export { ItemCard };
