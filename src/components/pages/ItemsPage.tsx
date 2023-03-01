import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Stack, Typography } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { useCollections } from '../../hooks/useCollections';
import { useAppDispatch } from '../../store/store';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { ItemsTable } from '../items/itemsTable/ItemsTable';
import { Loader } from '../UI/Loader';
import { ItemAddButton } from '../items/ItemAddButton';
import { NoContent } from '../UI/NoContent';
import { BackButton } from '../UI/BackButton';
import { useTranslation } from 'react-i18next';

const ItemsPage: FC = () => {
  const { getCollectionItems, status, error } = useItems();
  const { getCollectionById } = useCollections();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const currentCollection = getCollectionById(id as string);
  const collectionItems = getCollectionItems(id as string);

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container maxWidth="md">
          <Stack sx={{ pt: 3 }}>
            <BackButton />
            {collectionItems.length ? (
              <Stack>
                <Typography sx={{ textAlign: 'center', fontSize: 30, mb: 1 }}>
                  {currentCollection.title}
                </Typography>
                <ItemsTable collectionItems={collectionItems} />
              </Stack>
            ) : (
              <NoContent text={t('notifications.lastAddedItemsNoContent')} size={26} />
            )}
            <ItemAddButton ownerId={currentCollection.ownerId} />
          </Stack>
        </Container>
      )}
    </>
  );
};

export { ItemsPage };
