import { FC, useEffect, useMemo, useState } from 'react';
import { Container, Stack, Toolbar } from '@mui/material';
import { selectCollections, selectUser, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { Loader } from '../UI/Loader';
import { FilterBar } from '../UI/FilterBar';
import { CollectionAddButton } from '../collections/CollectionAddButton';
import { SortButton } from '../UI/SortButton';
import { sortByTitle } from '../../helpers/sort';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';

const UserCollectionsPage: FC = () => {
  const { collections, status, error } = useAppSelector(selectCollections);
  const [sortType, setSortType] = useState<string>('asc');
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const { currentUser } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    const collectionsToSort = collections.filter(
      ({ title, ownerId }) =>
        title.toLowerCase().includes(filteredCollections.toLowerCase()) &&
        ownerId === currentUser.id,
    );
    return sortByTitle(collectionsToSort, sortType) as ICollection[];
  }, [collections, currentUser, filteredCollections, sortType]);

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
      <Toolbar sx={{ gap: 2 }}>
        <FilterBar setFiltered={setFilteredCollections} />
        <SortButton sortType={sortType} setSortType={setSortType} />
        <CollectionAddButton />
      </Toolbar>
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
