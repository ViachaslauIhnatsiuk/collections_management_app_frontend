import { FC, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Stack, Toolbar } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { ItemsTable } from '../items/itemsTable/ItemsTable';
import { Loader } from '../UI/Loader';
import { FilterBar } from '../UI/FilterBar';
import { SortButton } from '../UI/SortButton';
import { ItemAddButton } from '../items/ItemAddButton';
import { sortByTitle } from '../../helpers/sort';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemsPage: FC = () => {
  const [filteredItems, setFilteredItems] = useState<string>('');
  const [sortType, setSortType] = useState<string>('asc');
  const { items, status, error } = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const currentId = pathname.split('/')[2];

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const itemsToRender = useMemo(() => {
    const itemsToSort = items.filter(
      ({ title, collectionId }) =>
        title.toLowerCase().includes(filteredItems.toLowerCase()) &&
        collectionId === currentId,
    );
    return sortByTitle(itemsToSort, sortType) as IItem[];
  }, [items, filteredItems, sortType]);

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
            {itemsToRender.length > 0 && (
              <Toolbar sx={{ gap: 2 }}>
                <FilterBar setFiltered={setFilteredItems} />
                <SortButton sortType={sortType} setSortType={setSortType} />
                <ItemAddButton />
              </Toolbar>
            )}
            {itemsToRender.length ? (
              <Stack
                sx={{
                  display: 'grid',
                  placeContent: 'center',
                }}
              >
                <ItemsTable itemsToRender={itemsToRender} />
              </Stack>
            ) : (
              'There are no items yet'
            )}
          </Stack>
        </Container>
      )}
    </>
  );
};

export { ItemsPage };
