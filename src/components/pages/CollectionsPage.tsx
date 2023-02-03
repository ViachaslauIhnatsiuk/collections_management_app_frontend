import { FC, useEffect, useMemo, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { CollectionsFilterbar } from '../collections/CollectionsFilterbar';
import { Loader } from '../UI/Loader';

const CollectionsPage: FC = () => {
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const { collections, status, error } = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    return collections.filter(({ title }) =>
      title.toLowerCase().includes(filteredCollections.toLowerCase()),
    );
  }, [collections, filteredCollections]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      {status === 'loading' && <Loader />}
      {error === 'loading' && <h2>Error: {error}</h2>}
      <CollectionsFilterbar setState={setFilteredCollections} />
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {collectionsToRender.map((collection) => (
          <CollectionCard key={collection._id} {...collection} />
        ))}
      </Stack>
    </Container>
  );
};

export { CollectionsPage };
