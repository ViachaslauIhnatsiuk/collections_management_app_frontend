import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { ItemCommentsList } from './ItemCommentsList';
import { ItemCardLikes } from './ItemCardLikes';
import { ItemCardField } from './ItemCardField';
import { ItemCommentsCounter } from './ItemCommentsCounter';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const ItemCard: FC<{ item: IItem }> = ({ item }) => {
  const {
    title,
    tags,
    comments,
    _id,
    createdAt,
    updatedAt,
    collectionId,
    ownerId,
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 4,
        py: 2,
        gap: 2,
      }}
    >
      <Typography sx={{ fontSize: 26 }}>{title}</Typography>
      <Stack sx={{ width: '100%', maxHeight: 150, overflow: 'auto' }}>
        {itemValues.map((value, index) => {
          return (
            <ItemCardField
              key={index}
              title={itemKeys[index]}
              value={value?.toString() as string}
            />
          );
        })}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Tags:</Typography>
          <Typography sx={{ fontSize: 14 }}> {tags}</Typography>
        </Box>
      </Stack>
      <ItemCardLikes item={item} />
      <ItemCommentsCounter count={comments.length} />
      <ItemCommentsList item={item} />
    </Paper>
  );
};

export { ItemCard };
