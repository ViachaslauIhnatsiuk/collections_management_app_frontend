import { FC, useEffect, useMemo, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { CollectionsToolbar } from '../collections/CollectionsToolbar';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { Loader } from '../UI/Loader';
import { NoContent } from '../UI/NoContent';
import { selectCollections, selectAuth, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { sortByTitle } from '../../helpers/sort';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';

const UserCollectionsPage: FC = () => {
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const [sortType, setSortType] = useState<string>('asc');
  const { collections, status, error } = useAppSelector(selectCollections);
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    const collectionsToSort = collections.filter(
      ({ title, ownerId }) =>
        title.toLowerCase().includes(filteredCollections.toLowerCase()) &&
        ownerId === currentUser._id,
    );
    return sortByTitle(collectionsToSort, sortType) as ICollection[];
  }, [collections, currentUser, filteredCollections, sortType]);

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', placeContent: 'center', pt: 1, pb: 5 }}
        >
          <Stack sx={{ flexGrow: 1, gap: 3 }}>
            <CollectionsToolbar
              sortType={sortType}
              setSortType={setSortType}
              setFilteredCollections={setFilteredCollections}
            />
            {collectionsToRender.length ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: 4,
                }}
              >
                {collectionsToRender.map((collection) => (
                  <CollectionCard key={collection._id} {...collection} />
                ))}
              </Box>
            ) : (
              <NoContent text="COLLECTIONS" size={26} />
            )}
          </Stack>
        </Container>
      )}
    </>
  );
};

export { UserCollectionsPage };
