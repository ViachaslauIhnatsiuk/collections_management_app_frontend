import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { IItemComment } from '../../../store/slices/itemSlice/itemModel';
import { convertDate } from '../../../helpers/convertDate';

const ItemComment: FC<{ comment: IItemComment }> = ({ comment }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar variant="rounded" sx={{ backgroundColor: 'primary.main' }}>
          {comment.user[0].toUpperCase()}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, lineHeight: 1 }}>
            {comment.user}
          </Typography>
          <Typography sx={{ fontSize: 12, mt: 0.2, lineHeight: 1.2 }}>
            {comment.text}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: 10, textAlign: 'end' }}>
        Posted: {convertDate(comment.createdAt)}
      </Typography>
    </Box>
  );
};

export { ItemComment };
