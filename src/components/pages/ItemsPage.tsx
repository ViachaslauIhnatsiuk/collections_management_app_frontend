import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Stack, Toolbar } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { useAppDispatch } from '../../store/store';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { ItemsTable } from '../items/itemsTable/ItemsTable';
import { Loader } from '../UI/Loader';
import { ItemAddButton } from '../items/ItemAddButton';

const ItemsPage: FC = () => {
  const { getCollectionItems, status, error } = useItems();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const collectionItems = getCollectionItems(id as string);

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container maxWidth="md">
          <Stack>
            <Toolbar sx={{ gap: 2 }}>
              <ItemAddButton />
            </Toolbar>
            {collectionItems.length ? (
              <Stack>
                <ItemsTable collectionItems={collectionItems} />
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
