import { Container, Stack } from '@mui/material';
import { FC, useEffect, useMemo } from 'react';
import { selectCollections, selectUser, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collection/CollectionCard';

const UserCollectionsPage: FC = () => {
  const { collections, status, error } = useAppSelector(selectCollections);
  const { currentUser } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    return collections.filter(({ ownerId }) => ownerId === currentUser.id);
  }, [collections, currentUser]);

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
