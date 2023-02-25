import { FC } from 'react';
import { Badge } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

const ItemCommentsCounter: FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {count !== 0 && (
        <Badge
          sx={{ alignSelf: 'flex-start', mb: -3, ml: -1 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={count}
          color="primary"
        >
          <CommentIcon />
        </Badge>
      )}
    </>
  );
};

export { ItemCommentsCounter };
