import { FC, Fragment, useEffect, useState } from 'react';
import { Divider, Paper } from '@mui/material';
import { ItemComment } from './ItemComment';
import { ItemCommentsForm } from './ItemCommentsForm';
import { NoContent } from '../../UI/NoContent';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import {
  updateItem,
  updateSelectedItem,
} from '../../../store/slices/itemSlice/itemSlice';
import { IItem, IItemComment } from '../../../store/slices/itemSlice/itemModel';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../../../constants/commonConstants';

const newSocket = io(BASE_URL);

const ItemCommentsList: FC<{ item: IItem }> = ({ item }) => {
  const comments = item.comments;
  const [comment, setComment] = useState<string>('');
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    newSocket.on('recieve_comment', (data) => {
      dispatch(updateSelectedItem(data));
    });
  }, [newSocket]);

  const postComment = (): void => {
    const newComment: IItemComment = {
      user: currentUser.name,
      text: comment,
      createdAt: Date.now(),
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
      {comments.length ? (
        <Paper
          sx={{
            width: '100%',
            maxHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            gap: 1,
            px: 2,
            py: 1,
          }}
        >
          {[...comments].reverse().map((comment, index) => (
            <Fragment key={index}>
              <ItemComment comment={comment} />
              {comments.length !== index + 1 && <Divider variant="fullWidth" />}
            </Fragment>
          ))}
        </Paper>
      ) : (
        <NoContent text={t('items.commentsNoContent')} size={18} />
      )}
      {(currentUser._id || currentUser.isAdmin) && (
        <ItemCommentsForm
          comment={comment}
          setComment={setComment}
          postComment={postComment}
        />
      )}
    </>
  );
};

export { ItemCommentsList };
