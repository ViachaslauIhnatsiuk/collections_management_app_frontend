import { FC, useEffect, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { CollectionsToolbar } from '../collections/CollectionsToolbar';
import { CollectionCard } from '../collections/collectionCard/CollectionCard';
import { Loader } from '../UI/Loader';
import { NoContent } from '../UI/NoContent';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { useCollections } from '../../hooks/useCollections';

const UserCollectionsPage: FC = () => {
  const [filteredCollections, setFilteredCollections] = useState<string>('');
  const [sortType, setSortType] = useState<string>('asc');
  const [filterUser, setFilterUser] = useState<string>('All');
  const { getUserPageCollections } = useCollections();
  const { status, error } = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const collectionsToRender = getUserPageCollections(
    filteredCollections,
    sortType,
    filterUser,
  );

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container sx={{ display: 'flex', placeContent: 'center', pt: 1, pb: 5 }}>
          <Stack sx={{ flexGrow: 1, gap: 3 }}>
            <CollectionsToolbar
              sortType={sortType}
              filterUser={filterUser}
              setFilterUser={setFilterUser}
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
              <NoContent
                text={t('notifications.largestCollectionsNoContent')}
                size={26}
              />
            )}
          </Stack>
        </Container>
      )}
    </>
  );
};

export { UserCollectionsPage };
