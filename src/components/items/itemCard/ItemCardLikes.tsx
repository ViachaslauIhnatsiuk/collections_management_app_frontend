import { FC, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useAppDispatch } from '../../../store/store';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { updateItem } from '../../../store/slices/itemSlice/itemSlice';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const ItemCardLikes: FC<{ item: IItem }> = ({ item }) => {
  const likes = item.likes;
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectAuth);
  const [like, setLike] = useState<boolean>(likes.includes(currentUser._id));

  const toggleLike = () => {
    if (!like) {
      const updatedItem: IItem = {
        ...item,
        likes: [...likes, currentUser._id],
      };

      dispatch(updateItem([updatedItem, item.collectionId, item._id]));
    } else {
      const updatedLikes = likes.filter((like) => like !== currentUser._id);
      const updatedItem: IItem = {
        ...item,
        likes: [...updatedLikes],
      };

      dispatch(updateItem([updatedItem, item.collectionId, item._id]));
    }

    setLike(!like);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        position: 'absolute',
        top: -3,
        right: -3,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-end',
        px: 1.5,
        gap: 1,
        height: '30px',
        borderRadius: 1,
        cursor: currentUser._id === item.ownerId ? 'pointer' : 'default',
      }}
      onClick={() => currentUser._id === item.ownerId && toggleLike()}
    >
      {likes.includes(currentUser._id) ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      <Typography sx={{ fontSize: 18 }}>{likes.length}</Typography>
    </Paper>
  );
};

export { ItemCardLikes };
