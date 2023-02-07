import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { IItem, IItemComments } from '../../../store/slices/itemSlice/itemModel';
import { ItemCommentsList } from './ItemCommentsList';

const ItemCard: FC<{ item: IItem }> = ({ item }) => {
  const { _id, collectionId, ownerId, tags, comments, likes, ...itemToRender } = item;
  const itemKeys = Object.keys(itemToRender);
  const itemValues = Object.values(itemToRender);

  return (
    <Paper
      sx={{
        mt: 10,
        p: 3,
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h4">{item.title}</Typography>
      <Stack sx={{ width: '100%' }}>
        {itemValues.map((value, index) => {
          return (
            <Typography key={index} variant="h6">
              {itemKeys[index]}: {value}
            </Typography>
          );
        })}
      </Stack>
      <Stack
        sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Typography variant="h6">Tags: {tags}</Typography>
        <Typography variant="h6">Likes: {likes}</Typography>
      </Stack>
      <ItemCommentsList comments={comments as IItemComments[]} />
    </Paper>
  );
};

export { ItemCard };
