import { FC, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useAppDispatch } from '../../../store/store';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { updateItem } from '../../../store/slices/itemSlice/itemSlice';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { itemCardLikesStyles } from '../../../constants/componentsStyles';

const ItemCardLikes: FC<{ item: IItem }> = ({ item }) => {
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { likes } = item;
  const [like, setLike] = useState<boolean>(likes.includes(currentUser._id));

  const isActive = currentUser._id || currentUser.isAdmin;

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
      sx={{ ...itemCardLikesStyles, cursor: isActive ? 'pointer' : 'default' }}
      onClick={() => isActive && toggleLike()}
    >
      {likes.includes(currentUser._id) ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      <Typography sx={{ fontSize: 18 }}>{likes.length}</Typography>
    </Paper>
  );
};

export { ItemCardLikes };
