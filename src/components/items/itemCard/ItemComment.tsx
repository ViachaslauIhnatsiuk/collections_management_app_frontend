import { FC } from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { IItemComment } from '../../../store/slices/itemSlice/itemModel';

const ItemComment: FC<{ comment: IItemComment }> = ({ comment }) => {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="avatar">{'U'.toUpperCase()}</Avatar>
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography
            sx={{ fontSize: 15, fontWeight: 600, margin: 0, textAlign: 'left' }}
          >
            {comment.user}
          </Typography>
          <Typography sx={{ fontSize: 12, lineHeight: 1.15, my: 1, textAlign: 'left' }}>
            {comment.text}
          </Typography>
          <Typography sx={{ fontSize: 9, margin: 0, textAlign: 'left' }}>
            Posted: {comment.createdAt}
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
    </>
  );
};

export { ItemComment };
