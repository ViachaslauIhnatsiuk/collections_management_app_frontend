import { FC, useEffect, useMemo, useState } from 'react';
import { Container, Stack, Toolbar } from '@mui/material';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { FilterBar } from '../UI/FilterBar';
import { sortByTitle } from '../../helpers/sort';
import { Loader } from '../UI/Loader';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';
import { SortButton } from '../UI/SortButton';

const CollectionsPage: FC = () => {
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const [sortType, setSortType] = useState<string>('asc');
  const { collections, status, error } = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = useMemo(() => {
    const collectionsToSort = collections.filter(({ title }) =>
      title.toLowerCase().includes(filteredCollections.toLowerCase()),
    );
    return sortByTitle(collectionsToSort, sortType) as ICollection[];
  }, [collections, filteredCollections, sortType]);

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
      <Toolbar sx={{ gap: 2 }}>
        <FilterBar setFiltered={setFilteredCollections} />
        <SortButton sortType={sortType} setSortType={setSortType} />
      </Toolbar>
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
