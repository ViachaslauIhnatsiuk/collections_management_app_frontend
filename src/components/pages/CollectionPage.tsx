import { FC, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { ItemsTable } from '../items/ItemsTable';
import { Loader } from '../UI/Loader';

const CollectionPage: FC = () => {
  const { items, status, error } = useAppSelector(selectItems);
  const [filteredItems, setFilteredItems] = useState<string>('');
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const currentId = pathname.split('/')[2];

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const itemsToRender = useMemo(() => {
    return items.filter(
      ({ title, collectionId }) =>
        title.toLowerCase().includes(filteredItems.toLowerCase()) &&
        collectionId === currentId,
    );
  }, [items, filteredItems]);

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
      {items.length ? (
        <Stack
          sx={{
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <ItemsTable itemsToRender={itemsToRender} />
        </Stack>
      ) : null}
    </Container>
  );
};

export { CollectionPage };
