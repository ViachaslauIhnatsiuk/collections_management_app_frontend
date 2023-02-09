import { FC, useEffect, useState } from 'react';
import { Button, List, TextField, Typography } from '@mui/material';
import { ItemComment } from './ItemComment';
import { IItem, IItemComment } from '../../../store/slices/itemSlice/itemModel';
import { customScrollbarStyles } from '../../../constants/componentsStyles';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import {
  updateItem,
  updateSelectedItem,
} from '../../../store/slices/itemSlice/itemSlice';
import { BASE_URL } from '../../../constants/baseUrl';
import io from 'socket.io-client';

const newSocket = io(BASE_URL);

const ItemCommentsList: FC<{ item: IItem }> = ({ item }) => {
  const comments = item.comments as IItemComment[];
  const [comment, setComment] = useState<string>('');
  const { currentUser } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    newSocket.on('recieve_comment', (data) => {
      dispatch(updateSelectedItem(data));
    });
  }, [newSocket]);

  const postComment = (): void => {
    const newComment: IItemComment = {
      user: currentUser.name,
      text: comment,
    };

    const updatedItem: IItem = {
      ...item,
      comments: [...comments, newComment],
    };

    dispatch(updateItem([updatedItem, item.collectionId as string, item._id as string]));

    newSocket.emit('send_comment', updatedItem);

    setComment('');
  };

  return (
    <>
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
        {comments.length
          ? [...comments]
              .reverse()
              .map((comment, index) => <ItemComment key={index} comment={comment} />)
          : 'Write first comment'}
      </List>
      <TextField
        required
        fullWidth
        label="Comment"
        multiline
        rows={2}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={customScrollbarStyles}
      />
      <Button
        type="button"
        fullWidth
        color="success"
        variant="contained"
        disabled={!comment}
        onClick={postComment}
      >
        Post
      </Button>
    </>
  );
};

export { ItemCommentsList };
