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
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 2,
          py: 0.5,
          position: 'relative',
        }}
      >
        <Stack>
          <Typography sx={{ fontSize: 15 }}>Title: {item.title}</Typography>
          <Typography sx={{ fontSize: 12 }}>
            Collection: {getCollectionById(item.collectionId)?.title}
          </Typography>
        </Stack>
        <Typography
          sx={{
            alignSelf: 'flex-end',
            fontSize: 11,
            position: 'absolute',
            top: '5px',
            right: '10px',
          }}
        >
          Added: {convertDate(item.createdAt)}
        </Typography>
      </Paper>
    </Link>
  );
};

export { LastAddedItem };
