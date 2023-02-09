import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { IItemComment } from '../../../store/slices/itemSlice/itemModel';

const ItemComment: FC<{ comment: IItemComment }> = ({ comment }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        position: 'relative',
      }}
    >
      <Stack>
        <Stack sx={{ flexDirection: 'row', gap: 0.5 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>From: </Typography>
          <Typography sx={{ fontSize: 14 }}>{comment.user}</Typography>
        </Stack>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Message: </Typography>
        <Typography sx={{ fontSize: 13, lineHeight: 1.15, wordBreak: 'break-all' }}>
          {comment.text}
        </Typography>
      </Stack>
    </Paper>
  );
};

export { ItemComment };
