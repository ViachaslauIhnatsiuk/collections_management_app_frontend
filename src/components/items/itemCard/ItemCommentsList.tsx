import { FC, useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { ItemComment } from './ItemComment';
import { ItemCommentsForm } from './ItemCommentsForm';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import {
  updateItem,
  updateSelectedItem,
} from '../../../store/slices/itemSlice/itemSlice';
import { customScrollbarStyles } from '../../../constants/componentsStyles';
import { IItem, IItemComment } from '../../../store/slices/itemSlice/itemModel';
import { BASE_URL } from '../../../constants/baseUrl';
import io from 'socket.io-client';

const newSocket = io(BASE_URL);

const ItemCommentsList: FC<{ item: IItem }> = ({ item }) => {
  const comments = item.comments;
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

    dispatch(updateItem([updatedItem, item.collectionId, item._id]));
    newSocket.emit('send_comment', updatedItem);
    setComment('');
  };

  return (
    <>
      <Typography variant="h6">Comments</Typography>
      <Paper
        sx={{
          width: '95%',
          maxHeight: '200px',
          overflow: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          ...customScrollbarStyles,
        }}
      >
        {comments.length
          ? [...comments]
              .reverse()
              .map((comment, index) => <ItemComment key={index} comment={comment} />)
          : 'Write first comment'}
      </Paper>
      <ItemCommentsForm
        comment={comment}
        setComment={setComment}
        postComment={postComment}
      />
    </>
  );
};

export { ItemCommentsList };
