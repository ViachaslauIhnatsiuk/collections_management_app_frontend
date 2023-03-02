import { FC, useEffect } from 'react';
import { Stack, Container } from '@mui/material';
import { LastAddedItemsList } from '../main/LastAddedItemsList';
import { LargestCollectionsList } from '../main/LargestCollectionsList';
import { TagsCloud } from '../main/tagsCloud/TagsCloud';
import { useAppDispatch } from '../../store/store';
import { getCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { getItems } from '../../store/slices/itemSlice/itemSlice';
import { getUsers } from '../../store/slices/usersSlice/usersSlice';
import { mainPageContainerStyles } from '../../constants/componentsStyles';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
    dispatch(getItems());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container sx={mainPageContainerStyles} data-testid="main-page">
      <Stack sx={{ flexDirection: { md: 'row', sm: 'column', xs: 'column' }, gap: 3 }}>
        <LastAddedItemsList />
        <LargestCollectionsList />
      </Stack>
      <TagsCloud data-testid="tags-cloud" />
    </Container>
  );
};

export { MainPage };
