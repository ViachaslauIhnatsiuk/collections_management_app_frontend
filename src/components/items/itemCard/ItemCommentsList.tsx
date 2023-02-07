import { FC } from 'react';
import { Typography, List } from '@mui/material';
import { ItemComment } from './ItemComment';
import { IItemComments } from '../../../store/slices/itemSlice/itemModel';

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
        '&::-webkit-scrollbar': {
          width: 5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#eeeeee',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#d3d3d3',
          borderRadius: '5px',
        },
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
