import { FC, useEffect, useMemo, useState } from 'react';
import { Container, Stack, Toolbar } from '@mui/material';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { Loader } from '../UI/Loader';
import { FilterBar } from '../UI/FilterBar';
import { SortButton } from '../UI/SortButton';
import { sortByTitle } from '../../helpers/sort';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';

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
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container
          maxWidth="md"
          sx={{
            display: 'grid',
            placeContent: 'center',
            py: 5,
          }}
        >
          <Stack>
            {collectionsToRender.length > 0 && (
              <Toolbar sx={{ gap: 2 }}>
                <FilterBar setFiltered={setFilteredCollections} />
                <SortButton sortType={sortType} setSortType={setSortType} />
              </Toolbar>
            )}
            <Stack
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
              }}
            >
              {collectionsToRender.length
                ? collectionsToRender.map((collection) => (
                    <CollectionCard key={collection._id} {...collection} />
                  ))
                : 'There are no collections yet'}
            </Stack>
          </Stack>
        </Container>
      )}
    </>
  );
};

export { CollectionsPage };
