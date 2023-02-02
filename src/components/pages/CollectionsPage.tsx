import { Container, Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collection/CollectionCard';

const CollectionsPage: FC = () => {
  const { collections, status, error } = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      {status === 'loading' && <h2>Loading...</h2>}
      {error === 'loading' && <h2>Error: {error}</h2>}
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {collections.map((collection) => (
          <CollectionCard key={collection._id} {...collection} />
        ))}
      </Stack>
    </Container>
  );
};

export { CollectionsPage };