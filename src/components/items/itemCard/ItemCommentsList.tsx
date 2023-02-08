import { FC } from 'react';
import { Typography, List } from '@mui/material';
import { ItemComment } from './ItemComment';
import { IItemComments } from '../../../store/slices/itemSlice/itemModel';
import { customScrollbarStyles } from '../../../constants/componentsStyles';

const ItemCommentsList: FC<{ comments: IItemComments[] }> = ({ comments }) => {
  return (
    <List
      sx={{
        width: '100%',
        maxHeight: '300px',
        overflow: 'auto',
        bgcolor: 'background.paper',
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        ...customScrollbarStyles,
      }}
    >
      <Typography variant="h6">Comments</Typography>
      {comments.map((comment, index) => (
        <ItemComment key={index} comment={comment} />
      ))}
    </List>
  );
};

export { ItemCommentsList };
