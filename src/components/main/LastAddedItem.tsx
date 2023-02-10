import { FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { useCollections } from '../../hooks/useCollections';
import { convertDate } from '../../helpers/convertDate';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const LastAddedItem: FC<{ item: IItem }> = ({ item }) => {
  const { getCollectionById } = useCollections();

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 2,
        position: 'relative',
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: 14 }}>Title: {item.title}</Typography>
        <Typography sx={{ fontSize: 14 }}>
          Collection: {getCollectionById(item.collectionId as string)}
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
        Time: {convertDate(item.createdAt as string)}
      </Typography>
    </Paper>
  );
};

export { LastAddedItem };
