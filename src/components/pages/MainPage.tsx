import { FC } from 'react';
import { Container } from '@mui/material';
import { LastAddedItemsList } from '../main/LastAddedItemsList';
import { LargestCollectionsList } from '../main/LargestCollectionsList';

const MainPage: FC = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 3 }}>
      <LastAddedItemsList />
      <LargestCollectionsList />
    </Container>
  );
};

export { MainPage };
