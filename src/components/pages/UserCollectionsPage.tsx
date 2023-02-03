import { FC, useEffect, useMemo, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { selectCollections, selectUser, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { CollectionsToolbar } from '../collections/CollectionsToolbar';
import { Loader } from '../UI/Loader';

const UserCollectionsPage: FC = () => {
  const { collections, status, error } = useAppSelector(selectCollections);
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const { currentUser } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    return collections.filter(
      ({ title, ownerId }) =>
        title.toLowerCase().includes(filteredCollections.toLowerCase()) &&
        ownerId === currentUser.id,
    );
  }, [collections, currentUser, filteredCollections]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
        gap: 2,
      }}
    >
      {status === 'loading' && <Loader />}
      {error === 'loading' && <h2>Error: {error}</h2>}
      <CollectionsToolbar setState={setFilteredCollections} />
      {collections.length ? (
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
      ) : null}
    </Container>
  );
};

export { UserCollectionsPage };
