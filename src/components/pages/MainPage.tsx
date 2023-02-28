import { FC, useEffect } from 'react';
import { Stack, Container } from '@mui/material';
import { LastAddedItemsList } from '../main/LastAddedItemsList';
import { LargestCollectionsList } from '../main/LargestCollectionsList';
import { useAppDispatch } from '../../store/store';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { getItems } from '../../store/slices/itemSlice/itemSlice';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Container sx={{ pt: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Stack
        sx={{
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          gap: 3,
        }}
      >
        <LastAddedItemsList />
        <LargestCollectionsList />
      </Stack>
    </Container>
  );
};

export { MainPage };
