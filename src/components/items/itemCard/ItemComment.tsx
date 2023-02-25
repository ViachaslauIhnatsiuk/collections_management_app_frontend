import { FC } from 'react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { IItemComment } from '../../../store/slices/itemSlice/itemModel';
import { convertDate } from '../../../helpers/convertDate';

const ItemComment: FC<{ comment: IItemComment }> = ({ comment }) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar alt="avatar" sx={{ backgroundColor: theme.palette.primary.main }}>
          {comment.user[0].toUpperCase()}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: 20, fontWeight: 600, lineHeight: 1 }}>
            {comment.user}
          </Typography>
          <Typography sx={{ fontSize: 13, mt: 0.3 }}>{comment.text}</Typography>
          <Typography sx={{ fontSize: 10, mt: 1 }}>
            Posted: {convertDate(comment.createdAt)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { ItemComment };
