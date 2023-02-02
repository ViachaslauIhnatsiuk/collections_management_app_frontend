import { Stack } from '@mui/material';
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
    <Stack
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
      }}
    >
      {status === 'loading' && <h2>Loading...</h2>}
      {error === 'loading' && <h2>Error: {error}</h2>}
      {collections.map((collection) => (
        <CollectionCard key={collection._id} {...collection} />
      ))}
    </Stack>
  );
};

export { CollectionsPage };
