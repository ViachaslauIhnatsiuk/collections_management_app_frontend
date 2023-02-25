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
  const [like, setLike] = useState<boolean>(likes.includes(currentUser.id));

  const toggleLike = () => {
    if (!like) {
      const updatedItem: IItem = {
        ...item,
        likes: [...likes, currentUser.id],
      };

      dispatch(updateItem([updatedItem, item.collectionId, item._id]));
    } else {
      const updatedLikes = likes.filter((like) => like !== currentUser.id);
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
        display: 'flex',
        alignItems: 'center',
        px: 1.5,
        gap: 1,
        height: '30px',
        borderRadius: '12px',
        cursor: currentUser.id === item.ownerId ? 'pointer' : 'default',
      }}
      onClick={() => currentUser.id === item.ownerId && toggleLike()}
    >
      {likes.includes(currentUser.id) ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      <Typography sx={{ fontSize: 18 }}>{likes.length}</Typography>
    </Paper>
  );
};

export { ItemCardLikes };
