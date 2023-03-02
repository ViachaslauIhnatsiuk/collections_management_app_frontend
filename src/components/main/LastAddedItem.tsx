import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCollections } from '../../hooks/useCollections';
import { convertDate } from '../../helpers/convertDate';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const LastAddedItem: FC<{ item: IItem }> = ({ item }) => {
  const { getCollectionById } = useCollections();

  return (
    <Link
      to={`/all-collections/${item.collectionId}/items/${item._id}`}
      style={{ textDecoration: 'none' }}
    >
      <Paper
        elevation={2}
        sx={{ display: 'flex', alignItems: 'center', px: 1, pt: 1 }}
        data-testid="last-added-item"
      >
        <Stack>
          <Typography
            sx={{ fontSize: 15, lineHeight: 1 }}
            data-testid="last-added-item-title"
          >
            Title: {item.title}
          </Typography>
          <Typography sx={{ fontSize: 13 }}>
            Collection: {getCollectionById(item.collectionId)?.title}
          </Typography>
          <Typography
            sx={{ fontSize: 11, mt: 0.5 }}
            data-testid="last-added-item-created"
          >
            Added: {convertDate(item.createdAt)}
          </Typography>
        </Stack>
      </Paper>
    </Link>
  );
};

export { LastAddedItem };
