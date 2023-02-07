import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Stack, Toolbar } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { ItemsTable } from '../items/itemsTable/ItemsTable';
import { Loader } from '../UI/Loader';
import { ItemAddButton } from '../items/ItemAddButton';

const ItemsPage: FC = () => {
  const { items, status, error } = useAppSelector(selectItems);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const itemsToRender = useMemo(
    () => items.filter(({ collectionId }) => collectionId === id),
    [items],
  );

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container maxWidth="md">
          <Stack>
            <Toolbar sx={{ gap: 2 }}>
              <ItemAddButton />
            </Toolbar>
            {itemsToRender.length ? (
              <Stack>
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
