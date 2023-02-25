import { FC } from 'react';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { ItemCommentsList } from './ItemCommentsList';
import { ItemCardLikes } from './ItemCardLikes';
import ReactMarkdown from 'react-markdown';
import { ItemCommentsCounter } from './ItemCommentsCounter';

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
      elevation={4}
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
              {itemKeys[index]}: {value?.toString()}
            </Typography>
          );
        })}
      </Stack>
      <Stack
        sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontSize: 16 }}>Tags: {tags}</Typography>
        <ItemCardLikes item={item} />
      </Stack>
      <Divider sx={{ width: '100%', my: 2 }} />
      <ItemCommentsCounter count={comments.length} />
      <ItemCommentsList item={item} />
    </Paper>
  );
};

export { ItemCard };
